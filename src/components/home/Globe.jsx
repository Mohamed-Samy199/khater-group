// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { feature } from 'topojson-client';
// import land from 'world-atlas/land-110m.json';

// /* ---------- config ---------- */

// const DOT_COUNT = 24000; // sample points on the sphere (~29% land)
// const AUTO_SPEED = 0.12; // rad/s (one full turn ≈ 52s)
// const HQ = { lat: 26.8, lon: 30.8 }; // Egypt marker
// const MARKER_COLOR = '#B3B3B3'; // brand neutral grey

// // Orbit colors come from the brand palette (sector accents)
// const ORBITS = [
//   { color: '#DE1F26', r: 1.62, tiltZ: 0.55, rotY: 0.3, speed: 0.34, phase: 0.4 }, // sports
//   { color: '#DF72E8', r: 1.7, tiltZ: 0.2, rotY: -0.5, speed: -0.28, phase: 2.1 }, // play
//   { color: '#8DC85B', r: 1.5, tiltZ: -0.35, rotY: 0.9, speed: 0.4, phase: 4.0 }, // scapes
//   { color: '#6481BD', r: 1.58, tiltZ: -0.1, rotY: 0.1, speed: -0.3, phase: 1.2 }, // tech
// ];

// /* ---------- helpers ---------- */

// function latLonToVec3(lat, lon, r) {
//   const phi = (lat * Math.PI) / 180;
//   const lam = (lon * Math.PI) / 180;
//   return new THREE.Vector3(r * Math.cos(phi) * Math.sin(lam), r * Math.sin(phi), r * Math.cos(phi) * Math.cos(lam));
// }

// // Draw the land polygons into an equirectangular canvas, used as a mask for the dots
// function buildLandMask(w = 1440, h = 720) {
//   const canvas = document.createElement('canvas');
//   canvas.width = w;
//   canvas.height = h;
//   const ctx = canvas.getContext('2d', { willReadFrequently: true });
//   ctx.fillStyle = '#000';
//   ctx.fillRect(0, 0, w, h);
//   ctx.fillStyle = '#fff';

//   const geo = feature(land, land.objects.land);
//   const feats = geo.type === 'FeatureCollection' ? geo.features : [geo];
//   feats.forEach((f) => {
//     const g = f.geometry;
//     const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
//     polys.forEach((poly) => {
//       ctx.beginPath();
//       poly.forEach((ring) => {
//         ring.forEach(([lon, lat], i) => {
//           const x = ((lon + 180) / 360) * w;
//           const y = ((90 - lat) / 180) * h;
//           if (i === 0) ctx.moveTo(x, y);
//           else ctx.lineTo(x, y);
//         });
//         ctx.closePath();
//       });
//       ctx.fill('evenodd');
//     });
//   });
//   return { data: ctx.getImageData(0, 0, w, h).data, w, h };
// }

// function radialTexture(size, stops) {
//   const c = document.createElement('canvas');
//   c.width = size;
//   c.height = size;
//   const ctx = c.getContext('2d');
//   const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
//   stops.forEach(([o, col]) => g.addColorStop(o, col));
//   ctx.fillStyle = g;
//   ctx.fillRect(0, 0, size, size);
//   return new THREE.CanvasTexture(c);
// }

// function buildDots() {
//   const { data, w, h } = buildLandMask();
//   const positions = [];
//   const colors = [];
//   const golden = Math.PI * (3 - Math.sqrt(5));

//   for (let i = 0; i < DOT_COUNT; i += 1) {
//     const y = 1 - ((i + 0.5) / DOT_COUNT) * 2;
//     const lat = (Math.asin(y) * 180) / Math.PI;
//     const lon = (((i * golden) % (Math.PI * 2)) * 180) / Math.PI - 180;

//     const px = Math.min(w - 1, Math.floor(((lon + 180) / 360) * w));
//     const py = Math.min(h - 1, Math.floor(((90 - lat) / 180) * h));
//     const isLand = data[(py * w + px) * 4] > 128;

//     // Land: bright dots. Ocean: a few very dim dots for depth.
//     if (!isLand && Math.random() > 0.1) continue;
//     const b = isLand ? 0.45 + Math.random() * 0.55 : 0.1;

//     const p = latLonToVec3(lat, lon, 1.0);
//     positions.push(p.x, p.y, p.z);
//     colors.push(b, b, b);
//   }

//   const geometry = new THREE.BufferGeometry();
//   geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//   geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
//   return geometry;
// }

// /* ---------- component ---------- */

// export default function Globe() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return undefined;

//     let renderer;
//     try {
//       renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
//     } catch (e) {
//       return undefined; // no WebGL: the section simply shows without the globe
//     }
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
//     renderer.setClearColor(0x000000, 0);
//     const canvas = renderer.domElement;
//     canvas.style.display = 'block';
//     canvas.style.width = '100%';
//     canvas.style.height = '100%';
//     canvas.style.opacity = '0';
//     canvas.style.transition = 'opacity 1600ms ease';
//     mount.appendChild(canvas);

//     const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
//     camera.position.set(0, 0, 5.6);

//     const disposables = [];
//     const track = (o) => {
//       disposables.push(o);
//       return o;
//     };

//     const AXIS_X = new THREE.Vector3(1, 0, 0);
//     const AXIS_Y = new THREE.Vector3(0, 1, 0);
//     const AXIS_Z = new THREE.Vector3(0, 0, 1);

//     // Orbits share one view tilt (camera looks slightly down on them)
//     const root = new THREE.Group();
//     root.rotation.x = 0.4;
//     scene.add(root);

//     // The globe lives in screen space so it can be dragged in any direction.
//     // `ball` = free orientation (set by dragging), `spin` = rotation around its own axis.
//     const ball = new THREE.Group();
//     ball.quaternion
//       .setFromAxisAngle(AXIS_X, 0.4) // same view tilt as the orbits
//       .multiply(new THREE.Quaternion().setFromAxisAngle(AXIS_Z, 0.18)); // axial tilt
//     scene.add(ball);
//     const spin = new THREE.Group();
//     spin.rotation.y = (-25 * Math.PI) / 180; // starts facing Africa / Middle East
//     ball.add(spin);

//     // Dark glass sphere with a rim light
//     const sphereMat = track(
//       new THREE.ShaderMaterial({
//         vertexShader: `
//           varying vec3 vN; varying vec3 vV;
//           void main() {
//             vN = normalize(normalMatrix * normal);
//             vV = -(modelViewMatrix * vec4(position, 1.0)).xyz;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//           }`,
//         fragmentShader: `
//           varying vec3 vN; varying vec3 vV;
//           void main() {
//             vec3 n = normalize(vN); vec3 v = normalize(vV);
//             float rim = pow(1.0 - max(dot(n, v), 0.0), 2.4);
//             float l = max(dot(n, normalize(vec3(-0.5, 0.6, 0.7))), 0.0);
//             vec3 col = vec3(0.025, 0.027, 0.03) + vec3(0.55, 0.58, 0.6) * rim * 0.75 + vec3(0.07) * l;
//             gl_FragColor = vec4(col, 1.0);
//           }`,
//       }),
//     );
//     const sphereGeo = track(new THREE.SphereGeometry(0.992, 96, 96));
//     spin.add(new THREE.Mesh(sphereGeo, sphereMat));

//     // Dot-matrix continents
//     const dotsGeo = track(buildDots());
//     const dotTex = track(
//       radialTexture(64, [
//         [0, 'rgba(255,255,255,1)'],
//         [0.55, 'rgba(255,255,255,1)'],
//         [1, 'rgba(255,255,255,0)'],
//       ]),
//     );
//     const dotsMat = track(
//       new THREE.PointsMaterial({
//         size: 0.034,
//         map: dotTex,
//         vertexColors: true,
//         transparent: true,
//         depthWrite: false,
//         blending: THREE.AdditiveBlending,
//       }),
//     );
//     spin.add(new THREE.Points(dotsGeo, dotsMat));

//     // Egypt marker + pulse
//     const hqPos = latLonToVec3(HQ.lat, HQ.lon, 1.004);
//     const hqGeo = track(new THREE.SphereGeometry(0.022, 16, 16));
//     const hqMat = track(new THREE.MeshBasicMaterial({ color: MARKER_COLOR }));
//     const hq = new THREE.Mesh(hqGeo, hqMat);
//     hq.position.copy(hqPos);
//     spin.add(hq);

//     const pulseGeo = track(new THREE.RingGeometry(0.024, 0.03, 40));
//     const pulseMat = track(
//       new THREE.MeshBasicMaterial({ color: MARKER_COLOR, transparent: true, side: THREE.DoubleSide, depthWrite: false }),
//     );
//     const pulse = new THREE.Mesh(pulseGeo, pulseMat);
//     pulse.position.copy(hqPos);
//     pulse.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), hqPos.clone().normalize());
//     spin.add(pulse);

//     // Atmosphere glow (neutral / silver)
//     const atmoMat = track(
//       new THREE.ShaderMaterial({
//         vertexShader: `
//           varying vec3 vN;
//           void main() {
//             vN = normalize(normalMatrix * normal);
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//           }`,
//         fragmentShader: `
//           varying vec3 vN;
//           void main() {
//             float i = pow(max(0.0, 0.72 - dot(vN, vec3(0.0, 0.0, 1.0))), 2.5);
//             gl_FragColor = vec4(vec3(0.72, 0.76, 0.8), 1.0) * clamp(i * 0.55, 0.0, 1.0);
//           }`,
//         side: THREE.BackSide,
//         blending: THREE.AdditiveBlending,
//         transparent: true,
//         depthWrite: false,
//       }),
//     );
//     const atmoGeo = track(new THREE.SphereGeometry(1.13, 64, 64));
//     scene.add(new THREE.Mesh(atmoGeo, atmoMat));

//     /* Orbits: glowing rings with a travelling node */
//     const glowTex = track(
//       radialTexture(128, [
//         [0, 'rgba(255,255,255,1)'],
//         [0.25, 'rgba(255,255,255,0.55)'],
//         [1, 'rgba(255,255,255,0)'],
//       ]),
//     );

//     const nodes = ORBITS.map((o) => {
//       const ringGroup = new THREE.Group();
//       ringGroup.rotation.set(0, o.rotY, o.tiltZ);
//       root.add(ringGroup);

//       const pts = new THREE.EllipseCurve(0, 0, o.r, o.r, 0, Math.PI * 2, false, 0)
//         .getPoints(160)
//         .map((p) => new THREE.Vector3(p.x, 0, p.y));
//       const curve = new THREE.CatmullRomCurve3(pts, true);

//       const lineGeo = track(new THREE.TubeGeometry(curve, 200, 0.0035, 6, true));
//       const lineMat = track(new THREE.MeshBasicMaterial({ color: o.color, transparent: true, opacity: 0.9 }));
//       ringGroup.add(new THREE.Mesh(lineGeo, lineMat));

//       const haloGeo = track(new THREE.TubeGeometry(curve, 200, 0.012, 6, true));
//       const haloMat = track(
//         new THREE.MeshBasicMaterial({
//           color: o.color,
//           transparent: true,
//           opacity: 0.12,
//           blending: THREE.AdditiveBlending,
//           depthWrite: false,
//         }),
//       );
//       ringGroup.add(new THREE.Mesh(haloGeo, haloMat));

//       const glowMat = track(
//         new THREE.SpriteMaterial({
//           map: glowTex,
//           color: o.color,
//           transparent: true,
//           blending: THREE.AdditiveBlending,
//           depthWrite: false,
//         }),
//       );
//       const glow = new THREE.Sprite(glowMat);
//       glow.scale.setScalar(0.22);
//       const coreMat = track(
//         new THREE.SpriteMaterial({
//           map: glowTex,
//           color: '#ffffff',
//           transparent: true,
//           blending: THREE.AdditiveBlending,
//           depthWrite: false,
//         }),
//       );
//       const core = new THREE.Sprite(coreMat);
//       core.scale.setScalar(0.07);
//       ringGroup.add(glow, core);

//       return { ...o, glow, core };
//     });

//     /* Sizing */
//     const resize = () => {
//       const w = mount.clientWidth;
//       const h = mount.clientHeight;
//       if (!w || !h) return;
//       renderer.setSize(w, h, false);
//       camera.aspect = w / h;
//       camera.updateProjectionMatrix();
//     };
//     resize();
//     const ro = new ResizeObserver(resize);
//     ro.observe(mount);

//     /* Drag to rotate in any direction (with a little inertia) */
//     const qDrag = new THREE.Quaternion();
//     const rotateBall = (ax, ay) => {
//       // ax: turn around the screen's vertical axis, ay: around the horizontal axis
//       ball.quaternion.premultiply(qDrag.setFromAxisAngle(AXIS_Y, ax));
//       ball.quaternion.premultiply(qDrag.setFromAxisAngle(AXIS_X, ay));
//       ball.quaternion.normalize();
//     };

//     let dragging = false;
//     let lastX = 0;
//     let lastY = 0;
//     let lastT = 0;
//     let vx = 0;
//     let vy = 0;
//     let vel = reduceMotion ? 0 : AUTO_SPEED;
//     const clampV = (v) => Math.max(-6, Math.min(6, v));

//     const onDown = (e) => {
//       dragging = true;
//       lastX = e.clientX;
//       lastY = e.clientY;
//       lastT = e.timeStamp;
//       vx = 0;
//       vy = 0;
//       canvas.setPointerCapture?.(e.pointerId);
//     };
//     const onMove = (e) => {
//       if (!dragging) return;
//       const ax = (e.clientX - lastX) * 0.006;
//       const ay = (e.clientY - lastY) * 0.006;
//       const dtm = Math.max((e.timeStamp - lastT) / 1000, 0.008);
//       rotateBall(ax, ay);
//       vx = clampV(ax / dtm);
//       vy = clampV(ay / dtm);
//       lastX = e.clientX;
//       lastY = e.clientY;
//       lastT = e.timeStamp;
//       vel = 0;
//     };
//     const onUp = (e) => {
//       dragging = false;
//       // a pause before release = no inertia
//       if (e.timeStamp - lastT > 80 || reduceMotion) {
//         vx = 0;
//         vy = 0;
//       }
//     };
//     canvas.addEventListener('pointerdown', onDown);
//     canvas.addEventListener('pointermove', onMove);
//     canvas.addEventListener('pointerup', onUp);
//     canvas.addEventListener('pointercancel', onUp);

//     /* Render loop (paused when off-screen or tab hidden) */
//     let visible = true;
//     const io = new IntersectionObserver(([en]) => {
//       visible = en.isIntersecting;
//     });
//     io.observe(mount);

//     const clock = new THREE.Clock();
//     let raf = 0;
//     let first = true;

//     const frame = () => {
//       raf = requestAnimationFrame(frame);
//       if (!visible || document.hidden) {
//         clock.getDelta();
//         return;
//       }
//       const dt = Math.min(clock.getDelta(), 0.05);
//       const t = clock.elapsedTime;

//       if (!reduceMotion) {
//         if (!dragging) {
//           if (Math.abs(vx) > 1e-3 || Math.abs(vy) > 1e-3) {
//             rotateBall(vx * dt, vy * dt);
//             const k = Math.exp(-dt * 3.2);
//             vx *= k;
//             vy *= k;
//           }
//           vel += (AUTO_SPEED - vel) * Math.min(1, dt * 2);
//           spin.rotation.y += vel * dt; // Earth turns west → east
//         }
//         nodes.forEach((n) => {
//           const a = n.phase + n.speed * t;
//           const x = n.r * Math.cos(a);
//           const z = n.r * Math.sin(a);
//           n.glow.position.set(x, 0, z);
//           n.core.position.set(x, 0, z);
//         });
//         const k = (t % 2.2) / 2.2;
//         pulse.scale.setScalar(1 + k * 3.2);
//         pulseMat.opacity = (1 - k) * 0.8;
//       } else {
//         nodes.forEach((n) => {
//           n.glow.position.set(n.r * Math.cos(n.phase), 0, n.r * Math.sin(n.phase));
//           n.core.position.copy(n.glow.position);
//         });
//         pulseMat.opacity = 0.5;
//       }

//       renderer.render(scene, camera);
//       if (first) {
//         first = false;
//         canvas.style.opacity = '1';
//       }
//     };
//     frame();

//     return () => {
//       cancelAnimationFrame(raf);
//       ro.disconnect();
//       io.disconnect();
//       canvas.removeEventListener('pointerdown', onDown);
//       canvas.removeEventListener('pointermove', onMove);
//       canvas.removeEventListener('pointerup', onUp);
//       canvas.removeEventListener('pointercancel', onUp);
//       disposables.forEach((d) => d.dispose?.());
//       renderer.dispose();
//       if (canvas.parentNode === mount) mount.removeChild(canvas);
//     };
//   }, []);

//   return <div ref={mountRef} className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing" aria-hidden="true" />;
// }





import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import earthMap from '../../assets/globe/earth-lights.png'; // R = land mask, G = city lights

/* ---------- config ---------- */

const AUTO_SPEED = 0.12; // rad/s (one full turn ≈ 52s)
const HQ = { lat: 26.8, lon: 30.8 }; // Egypt marker
const MARKER_COLOR = '#B3B3B3'; // brand neutral grey

// Orbit colors come from the brand palette (sector accents)
const ORBITS = [
  { color: '#DE1F26', r: 1.62, tiltZ: 0.55, rotY: 0.3, speed: 0.34, phase: 0.4 }, // sports
  { color: '#DF72E8', r: 1.7, tiltZ: 0.2, rotY: -0.5, speed: -0.28, phase: 2.1 }, // play
  { color: '#8DC85B', r: 1.5, tiltZ: -0.35, rotY: 0.9, speed: 0.4, phase: 4.0 }, // scapes
  { color: '#6481BD', r: 1.58, tiltZ: -0.1, rotY: 0.1, speed: -0.3, phase: 1.2 }, // tech
];

/* ---------- helpers ---------- */

function latLonToVec3(lat, lon, r) {
  const phi = (lat * Math.PI) / 180;
  const lam = (lon * Math.PI) / 180;
  return new THREE.Vector3(r * Math.cos(phi) * Math.sin(lam), r * Math.sin(phi), r * Math.cos(phi) * Math.cos(lam));
}

function radialTexture(size, stops) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([o, col]) => g.addColorStop(o, col));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(c);
}

/* ---------- scene ---------- */

function init(mount, earthTex) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    earthTex.dispose();
    return undefined; // no WebGL: the section simply shows without the globe
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.style.display = 'block';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.opacity = '0';
  canvas.style.transition = 'opacity 1600ms ease';
  mount.appendChild(canvas);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
  camera.position.set(0, 0, 5.6);

  const disposables = [];
  const track = (o) => {
    disposables.push(o);
    return o;
  };

  // The map is sampled by lat/lon in the shader, so no mipmaps (avoids a seam line)
  track(earthTex);
  earthTex.generateMipmaps = false;
  earthTex.minFilter = THREE.LinearFilter;
  earthTex.magFilter = THREE.LinearFilter;
  earthTex.needsUpdate = true;

  const AXIS_X = new THREE.Vector3(1, 0, 0);
  const AXIS_Y = new THREE.Vector3(0, 1, 0);
  const AXIS_Z = new THREE.Vector3(0, 0, 1);

  // Orbits share one view tilt (camera looks slightly down on them)
  const root = new THREE.Group();
  root.rotation.x = 0.4;
  scene.add(root);

  // The globe lives in screen space so it can be dragged in any direction.
  // `ball` = free orientation (set by dragging), `spin` = rotation around its own axis.
  const ball = new THREE.Group();
  ball.quaternion
    .setFromAxisAngle(AXIS_X, 0.4) // same view tilt as the orbits
    .multiply(new THREE.Quaternion().setFromAxisAngle(AXIS_Z, 0.18)); // axial tilt
  scene.add(ball);
  const spin = new THREE.Group();
  spin.rotation.y = (-25 * Math.PI) / 180; // starts facing Africa / Middle East
  ball.add(spin);

  // Dark glass globe: grey continents, white city lights, bright rim + soft highlight
  const sphereMat = track(
    new THREE.ShaderMaterial({
      uniforms: { uMap: { value: earthTex } },
      vertexShader: `
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = position;
          vN = normalize(normalMatrix * normal);
          vV = -(modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform sampler2D uMap;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        const float PI = 3.14159265359;
        void main() {
          vec3 p = normalize(vP);
          float lon = atan(p.x, p.z);
          float lat = asin(clamp(p.y, -1.0, 1.0));
          vec2 uv = vec2(lon / (2.0 * PI) + 0.5, lat / PI + 0.5);
          vec2 m = texture2D(uMap, uv).rg;
          float land = m.r;
          float lights = m.g;

          vec3 n = normalize(vN);
          vec3 v = normalize(vV);
          float ndv = max(dot(n, v), 0.0);
          float rim = pow(1.0 - ndv, 2.4);
          float diff = max(dot(n, normalize(vec3(-0.5, 0.6, 0.7))), 0.0);
          float spec = pow(max(dot(n, normalize(vec3(-0.45, 0.55, 0.7))), 0.0), 22.0);

          float g = 0.02
                  + (0.09 + 0.06 * diff) * land
                  + 1.35 * lights * (0.55 + 0.45 * ndv)
                  + 0.7 * rim * (0.55 + 0.45 * diff)
                  + 0.3 * spec;
          gl_FragColor = vec4(g * 0.97, g, g * 1.04, 1.0);
        }`,
    }),
  );
  const sphereGeo = track(new THREE.SphereGeometry(0.992, 128, 128));
  spin.add(new THREE.Mesh(sphereGeo, sphereMat));

  // Egypt marker + pulse
  const hqPos = latLonToVec3(HQ.lat, HQ.lon, 1.004);
  const hqGeo = track(new THREE.SphereGeometry(0.022, 16, 16));
  const hqMat = track(new THREE.MeshBasicMaterial({ color: MARKER_COLOR }));
  const hq = new THREE.Mesh(hqGeo, hqMat);
  hq.position.copy(hqPos);
  spin.add(hq);

  const pulseGeo = track(new THREE.RingGeometry(0.024, 0.03, 40));
  const pulseMat = track(
    new THREE.MeshBasicMaterial({ color: MARKER_COLOR, transparent: true, side: THREE.DoubleSide, depthWrite: false }),
  );
  const pulse = new THREE.Mesh(pulseGeo, pulseMat);
  pulse.position.copy(hqPos);
  pulse.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), hqPos.clone().normalize());
  spin.add(pulse);

  // Atmosphere glow (neutral / silver)
  const atmoMat = track(
    new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vN;
        void main() {
          vN = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec3 vN;
        void main() {
          float i = pow(max(0.0, 0.72 - dot(vN, vec3(0.0, 0.0, 1.0))), 2.5);
          gl_FragColor = vec4(vec3(0.72, 0.76, 0.8), 1.0) * clamp(i * 0.45, 0.0, 1.0);
        }`,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    }),
  );
  const atmoGeo = track(new THREE.SphereGeometry(1.13, 64, 64));
  scene.add(new THREE.Mesh(atmoGeo, atmoMat));

  /* Orbits: thin glowing rings with a travelling node */
  const glowTex = track(
    radialTexture(128, [
      [0, 'rgba(255,255,255,1)'],
      [0.25, 'rgba(255,255,255,0.55)'],
      [1, 'rgba(255,255,255,0)'],
    ]),
  );

  const nodes = ORBITS.map((o) => {
    const ringGroup = new THREE.Group();
    ringGroup.rotation.set(0, o.rotY, o.tiltZ);
    root.add(ringGroup);

    const pts = new THREE.EllipseCurve(0, 0, o.r, o.r, 0, Math.PI * 2, false, 0)
      .getPoints(160)
      .map((p) => new THREE.Vector3(p.x, 0, p.y));
    const curve = new THREE.CatmullRomCurve3(pts, true);

    const lineGeo = track(new THREE.TubeGeometry(curve, 200, 0.0028, 6, true));
    const lineMat = track(new THREE.MeshBasicMaterial({ color: o.color, transparent: true, opacity: 0.9 }));
    ringGroup.add(new THREE.Mesh(lineGeo, lineMat));

    const haloGeo = track(new THREE.TubeGeometry(curve, 200, 0.01, 6, true));
    const haloMat = track(
      new THREE.MeshBasicMaterial({
        color: o.color,
        transparent: true,
        opacity: 0.13,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    ringGroup.add(new THREE.Mesh(haloGeo, haloMat));

    const glowMat = track(
      new THREE.SpriteMaterial({
        map: glowTex,
        color: o.color,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    const glow = new THREE.Sprite(glowMat);
    glow.scale.setScalar(0.2);
    const coreMat = track(
      new THREE.SpriteMaterial({
        map: glowTex,
        color: '#ffffff',
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    const core = new THREE.Sprite(coreMat);
    core.scale.setScalar(0.065);
    ringGroup.add(glow, core);

    return { ...o, glow, core };
  });

  /* Sizing */
  const resize = () => {
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(mount);

  /* Drag to rotate in any direction (with a little inertia) */
  const qDrag = new THREE.Quaternion();
  const rotateBall = (ax, ay) => {
    // ax: turn around the screen's vertical axis, ay: around the horizontal axis
    ball.quaternion.premultiply(qDrag.setFromAxisAngle(AXIS_Y, ax));
    ball.quaternion.premultiply(qDrag.setFromAxisAngle(AXIS_X, ay));
    ball.quaternion.normalize();
  };

  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let lastT = 0;
  let vx = 0;
  let vy = 0;
  let vel = reduceMotion ? 0 : AUTO_SPEED;
  const clampV = (v) => Math.max(-6, Math.min(6, v));

  const onDown = (e) => {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    lastT = e.timeStamp;
    vx = 0;
    vy = 0;
    canvas.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (!dragging) return;
    const ax = (e.clientX - lastX) * 0.006;
    const ay = (e.clientY - lastY) * 0.006;
    const dtm = Math.max((e.timeStamp - lastT) / 1000, 0.008);
    rotateBall(ax, ay);
    vx = clampV(ax / dtm);
    vy = clampV(ay / dtm);
    lastX = e.clientX;
    lastY = e.clientY;
    lastT = e.timeStamp;
    vel = 0;
  };
  const onUp = (e) => {
    dragging = false;
    // a pause before release = no inertia
    if (e.timeStamp - lastT > 80 || reduceMotion) {
      vx = 0;
      vy = 0;
    }
  };
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointercancel', onUp);

  /* Render loop (paused when off-screen or tab hidden) */
  let visible = true;
  const io = new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
  });
  io.observe(mount);

  const clock = new THREE.Clock();
  let raf = 0;
  let first = true;

  const frame = () => {
    raf = requestAnimationFrame(frame);
    if (!visible || document.hidden) {
      clock.getDelta();
      return;
    }
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    if (!reduceMotion) {
      if (!dragging) {
        if (Math.abs(vx) > 1e-3 || Math.abs(vy) > 1e-3) {
          rotateBall(vx * dt, vy * dt);
          const k = Math.exp(-dt * 3.2);
          vx *= k;
          vy *= k;
        }
        vel += (AUTO_SPEED - vel) * Math.min(1, dt * 2);
        spin.rotation.y += vel * dt; // Earth turns west → east
      }
      nodes.forEach((n) => {
        const a = n.phase + n.speed * t;
        const x = n.r * Math.cos(a);
        const z = n.r * Math.sin(a);
        n.glow.position.set(x, 0, z);
        n.core.position.set(x, 0, z);
      });
      const k = (t % 2.2) / 2.2;
      pulse.scale.setScalar(1 + k * 3.2);
      pulseMat.opacity = (1 - k) * 0.8;
    } else {
      nodes.forEach((n) => {
        n.glow.position.set(n.r * Math.cos(n.phase), 0, n.r * Math.sin(n.phase));
        n.core.position.copy(n.glow.position);
      });
      pulseMat.opacity = 0.5;
    }

    renderer.render(scene, camera);
    if (first) {
      first = false;
      canvas.style.opacity = '1';
    }
  };
  frame();

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    canvas.removeEventListener('pointerdown', onDown);
    canvas.removeEventListener('pointermove', onMove);
    canvas.removeEventListener('pointerup', onUp);
    canvas.removeEventListener('pointercancel', onUp);
    disposables.forEach((d) => d.dispose?.());
    renderer.dispose();
    if (canvas.parentNode === mount) mount.removeChild(canvas);
  };
}

/* ---------- component ---------- */

export default function Globe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let cleanup;
    new THREE.TextureLoader().load(earthMap, (tex) => {
      if (disposed) {
        tex.dispose();
        return;
      }
      cleanup = init(mount, tex);
    });

    return () => {
      disposed = true;
      if (cleanup) cleanup();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing" aria-hidden="true" />;
}