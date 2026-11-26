'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import earthMap from '@/assets/globe/earth-lights.png';
import { resolveAssetSrc } from '@/lib/assets';

const AUTO_SPEED = 0.12;
const MARKER_COLOR = '#B3B3B3';

const LOCATIONS = [
  { name: 'Egypt HQ', lat: 26.8, lon: 30.8, phase: 0 },
  { name: 'Saudi Arabia', lat: 23.5, lon: 42.0, phase: 1.1 },
];

const ORBITS = [
  { color: '#DE1F26', r: 1.62, tiltZ: 0.55, rotY: 0.3, speed: 0.34, phase: 0.4 },
  { color: '#DF72E8', r: 1.7, tiltZ: 0.2, rotY: -0.5, speed: -0.28, phase: 2.1 },
  { color: '#8DC85B', r: 1.5, tiltZ: -0.35, rotY: 0.9, speed: 0.4, phase: 4.0 },
  { color: '#6481BD', r: 1.58, tiltZ: -0.1, rotY: 0.1, speed: -0.3, phase: 1.2 },
];

function latLonToVec3(lat: number, lon: number, r: number) {
  const phi = (lat * Math.PI) / 180;
  const lam = (lon * Math.PI) / 180;
  return new THREE.Vector3(
    r * Math.cos(phi) * Math.sin(lam),
    r * Math.sin(phi),
    r * Math.cos(phi) * Math.cos(lam)
  );
}

function radialTexture(size: number, stops: Array<[number, string]>) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  if (ctx) {
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    stops.forEach(([o, col]) => g.addColorStop(o, col));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  return new THREE.CanvasTexture(c);
}

interface Disposable {
  dispose?: () => void;
}

function init(mount: HTMLDivElement, earthTex: THREE.Texture) {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    earthTex.dispose();
    return undefined;
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
  camera.position.set(0, 0, 5.65);

  const disposables: Disposable[] = [];
  const track = <T extends Disposable>(o: T): T => {
    disposables.push(o);
    return o;
  };

  track(earthTex);
  earthTex.generateMipmaps = false;
  earthTex.minFilter = THREE.LinearFilter;
  earthTex.magFilter = THREE.LinearFilter;
  earthTex.needsUpdate = true;

  const AXIS_X = new THREE.Vector3(1, 0, 0);
  const AXIS_Y = new THREE.Vector3(0, 1, 0);
  const AXIS_Z = new THREE.Vector3(0, 0, 1);

  const world = new THREE.Group();
  world.position.set(0, 0, 0);
  world.scale.setScalar(0.975);
  scene.add(world);

  const root = new THREE.Group();
  root.rotation.x = 0.4;
  world.add(root);

  const ball = new THREE.Group();
  ball.quaternion
    .setFromAxisAngle(AXIS_X, 0.4)
    .multiply(new THREE.Quaternion().setFromAxisAngle(AXIS_Z, 0.18));
  world.add(ball);
  const spin = new THREE.Group();
  spin.rotation.y = (-25 * Math.PI) / 180;
  ball.add(spin);

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
    })
  );
  const sphereGeo = track(new THREE.SphereGeometry(0.992, 128, 128));
  spin.add(new THREE.Mesh(sphereGeo, sphereMat));

  const markerGeo = track(new THREE.SphereGeometry(0.022, 16, 16));
  const markerMat = track(new THREE.MeshBasicMaterial({ color: MARKER_COLOR }));
  const pulseGeo = track(new THREE.RingGeometry(0.024, 0.03, 40));

  const locationNodes = LOCATIONS.map((loc) => {
    const pos = latLonToVec3(loc.lat, loc.lon, 1.004);

    const pin = new THREE.Mesh(markerGeo, markerMat);
    pin.position.copy(pos);
    spin.add(pin);

    const pMat = track(
      new THREE.MeshBasicMaterial({
        color: MARKER_COLOR,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    const pulseMesh = new THREE.Mesh(pulseGeo, pMat);
    pulseMesh.position.copy(pos);
    pulseMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), pos.clone().normalize());
    spin.add(pulseMesh);

    return { ...loc, pin, pulseMesh, pMat };
  });

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
    })
  );
  const atmoGeo = track(new THREE.SphereGeometry(1.13, 64, 64));
  world.add(new THREE.Mesh(atmoGeo, atmoMat));

  const glowTex = track(
    radialTexture(128, [
      [0, 'rgba(255,255,255,1)'],
      [0.25, 'rgba(255,255,255,0.55)'],
      [1, 'rgba(255,255,255,0)'],
    ])
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
      })
    );
    ringGroup.add(new THREE.Mesh(haloGeo, haloMat));

    const glowMat = track(
      new THREE.SpriteMaterial({
        map: glowTex,
        color: o.color,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
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
      })
    );
    const core = new THREE.Sprite(coreMat);
    core.scale.setScalar(0.065);
    ringGroup.add(glow, core);

    return { ...o, glow, core };
  });

  const resize = () => {
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w < 640 ? 38 : 34;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(mount);

  const qDrag = new THREE.Quaternion();
  const rotateBall = (ax: number, ay: number) => {
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
  const clampV = (v: number) => Math.max(-6, Math.min(6, v));

  const onDown = (e: PointerEvent) => {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    lastT = e.timeStamp;
    vx = 0;
    vy = 0;
    canvas.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: PointerEvent) => {
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
  const onUp = (e: PointerEvent) => {
    dragging = false;
    if (e.timeStamp - lastT > 80 || reduceMotion) {
      vx = 0;
      vy = 0;
    }
  };
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointercancel', onUp);

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
        spin.rotation.y += vel * dt;
      }
      nodes.forEach((n) => {
        const a = n.phase + n.speed * t;
        const x = n.r * Math.cos(a);
        const z = n.r * Math.sin(a);
        n.glow.position.set(x, 0, z);
        n.core.position.set(x, 0, z);
      });
      locationNodes.forEach((loc) => {
        const k = ((t + loc.phase) % 2.2) / 2.2;
        loc.pulseMesh.scale.setScalar(1 + k * 3.2);
        loc.pMat.opacity = (1 - k) * 0.8;
      });
    } else {
      nodes.forEach((n) => {
        n.glow.position.set(n.r * Math.cos(n.phase), 0, n.r * Math.sin(n.phase));
        n.core.position.copy(n.glow.position);
      });
      locationNodes.forEach((loc) => {
        loc.pulseMesh.scale.setScalar(1.5);
        loc.pMat.opacity = 0.5;
      });
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

export default function Globe() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let cleanup: (() => void) | undefined;
    new THREE.TextureLoader().load(resolveAssetSrc(earthMap), (tex) => {
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

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
      aria-hidden="true"
    />
  );
}
