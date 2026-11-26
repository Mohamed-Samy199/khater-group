import type {
  RawSport,
  SportCategory,
  SportDiscipline,
  SportGalleryEntry,
  SportProject,
  SportSystem,
} from '@/types/sports';

export const SITE = 'https://www.khatersports.com';
export const url = (path: string): string => `${SITE}/${path}`;
export const sitePage = (propId: number): string => `${SITE}/SupServ.aspx?PropID=${propId}`;

export const CATEGORIES: SportCategory[] = ['All', 'Ball Sports', 'Racket Sports', 'Tracks & Specialty'];

export const RAW: RawSport[] = [
  {
    id: 'football',
    propId: 1,
    name: 'Football',
    category: 'Ball Sports',
    description: 'Natural, synthetic and hybrid turf pitches for stadiums, clubs and schools.',
    cover: 'Img/ImagesBorg-El-Arab-Stadium.jpg',
    badge: 'FIFA Quality Pro',
    projects: [
      {
        name: 'Alexandria University Stadium',
        type: 'Playground',
        images: [
          'Img/Images6c4ebe_d44108132d0a4581b06de9ae109f4e98_mv2_d_7360_4912_s_4_2.jpg',
          'Img/Imagesalex-univ-football-natural.jpg',
          'Img/Imageswork-8.jpg',
        ],
      },
      { name: 'Banha Stadium', type: 'Stadium', images: [] },
      { name: 'Borg El Arab Stadium', images: ['Img/ImagesBorg-El-Arab-Stadium.jpg'] },
      { name: 'Haileybury International School', images: ['Img/ImagesHaileyburyInternationalSchool.jpg'] },
      { name: 'Royal City Club', images: ['Img/ImagesRoyal-City-Football-artificial.jpg'] },
      { name: 'Suez Canal Authority Stadium', type: 'Hybrid court', images: ['Img/ImagesUntitled-6.jpg'] },
    ],
    systems: [{ name: 'Natural turf' }, { name: 'Synthetic turf' }, { name: 'Hybrid turf' }],
  },
  {
    id: 'basketball',
    propId: 2,
    name: 'Basketball',
    category: 'Ball Sports',
    description: 'Court floors built to international standards: wood, vinyl, PU and acrylic.',
    cover: 'img/basketball-Pu_indoor_floor.jpg',
    badge: 'FIBA Level 1',
    projects: [],
    systems: [
      { name: 'Wood floors', image: 'img/basketball-wood_floor.jpg' },
      { name: 'Vinyl floors', image: 'img/basketball-Vinyl_floor.jpg' },
      { name: 'Indoor PU floors', image: 'img/basketball-Pu_indoor_floor.jpg' },
      { name: 'Outdoor PU floors', image: 'img/basketball-Pu_outdoor_floor.jpg' },
      { name: 'Acrylic floors', image: 'img/basketball-Acrylic_Floor.jpg' },
    ],
  },
  {
    id: 'tennis',
    propId: 11,
    name: 'Tennis',
    category: 'Racket Sports',
    description: 'Tennis courts for hotels, clubs and sports cities, in seamless polyurethane or synthetic turf.',
    cover: 'Img/ImagesRoyal-city-club.jpg',
    badge: 'ITF Surface Pace Rated',
    projects: [
      { name: 'Intercontinental Hotel', type: 'Tennis court', images: ['Img/ImagesUntitled-7...jpg'] },
      { name: 'Port Said Sports City', type: 'Tennis courts', images: ['Img/ImagesRoyal-City-tennis.jpg'] },
      { name: 'Royal City Club', type: 'Tennis courts', images: ['Img/ImagesRoyal-city-club.jpg'] },
      { name: 'Al Obour Sporting Club', type: 'Synthetic turf courts', images: ['img/Tennis_Acrylic_Grass_Floor.jpg'] },
    ],
    systems: [{ name: 'Seamless polyurethane' }, { name: 'Synthetic turf' }],
  },
  {
    id: 'padel',
    propId: 14,
    name: 'Padel',
    category: 'Racket Sports',
    description: 'Padel tennis courts built for clubs.',
    cover: 'Img/Imagesroyal-padel.jpg',
    badge: 'FIP Standard',
    projects: [
      { name: 'Royal City Club', type: 'Padel tennis courts', images: ['Img/Imagesroyal-padel.jpg', 'Img/ImagesUntitled-5.jpg'] },
    ],
    systems: [],
  },
  {
    id: 'squash',
    propId: 12,
    name: 'Squash',
    category: 'Racket Sports',
    description: 'Squash courts with Rebound plaster walls and McWil glass.',
    cover: 'Img/ImagesZed-Park.jpg',
    badge: 'WSF Certified',
    projects: [
      {
        name: 'ZED Park',
        images: ['Img/ImagesZed-Park.jpg', 'Img/ImagesZed-Park-.jpg', 'Img/ImagesZed-Park..jpg'],
      },
      { name: 'Port Said Sports City', images: ['Img/ImagesUntitled-7.jpg'] },
      { name: 'Narges Club', images: ['Img/ImagesNargesclub.jpg'] },
      { name: 'Al Gonaa', images: ['Img/Images6c4ebe_008307eaed834c5c92c5d36ecfacb292_mv2.jpg'] },
    ],
    systems: [
      { name: 'Rebound plaster walls', image: 'img/squash%20_plaster.jpeg' },
      { name: 'Wall panels', image: 'img/squash_panel%20.jpeg' },
      { name: 'McWil glass walls', image: 'img/squash_glass.jpeg' },
    ],
  },
  {
    id: 'tracks',
    propId: 10,
    name: 'Tracks',
    category: 'Tracks & Specialty',
    badge: 'World Athletics-approved systems',
    description: 'Padded athletics track systems, plus cycling tracks. Most notable tracks in Egypt were built by Khater Sports.',
    cover: 'img/Tracks-Athletic_Track.jpg',
    projects: [
      { name: 'Alex University', type: 'Athletics track', images: ['Img/ImagesUntitledj.jpg'] },
      { name: 'Alexandria Stadium', type: 'Athletics track', images: ['Img/ImagesAlex-stadium-.jpg'] },
      { name: 'Ismailia Stadium', type: 'Athletics track', images: ['Img/ImagesIsmailia.jpg', 'Img/ImagesIsmailia2.jpg'] },
      { name: 'Al Salam Stadium', type: 'Athletics track', images: ['Img/ImagesSallam.jpg'] },
      { name: 'Suez Stadium', type: 'Athletics track', images: ['Img/Imagessuez.jpg'] },
      { name: 'Suez Canal Authority Stadium', type: 'Athletics track', images: ['Img/ImagesSues-Canal-.jpg'] },
      {
        name: 'Heliopolis Club, Al Shorouk City',
        type: 'Cycling track',
        images: ['Img/ImagesUntitled-7.jpg', 'Img/ImagesUntitled-.jpg', 'Img/ImagesUntitled-8..jpg'],
      },
    ],
    systems: [
      { name: 'Athletics tracks', image: 'img/Tracks-Athletic_Track.jpg' },
      { name: 'Cycling tracks', image: 'img/Tracks-Cycling_track.jpg' },
    ],
  },
  {
    id: 'hockey',
    propId: 3,
    name: 'Hockey',
    category: 'Ball Sports',
    badge: 'FIH-accredited fields',
    description: 'Field and rink hockey surfaces built to international standards, including FIH-accredited fields.',
    cover: 'img/hockey-Artificial_Grass_Floor.jpg',
    projects: [
      {
        name: 'Port Said Sports City',
        type: 'Hockey field, FIH accreditation',
        images: [
          'Img/ImagesPortSaidSportsCity.jpg',
          'Img/ImagesHockey-Certificate.jpg',
          'Img/ImagesHockey-testing1.jpg',
          'Img/ImagesHockey-test2.jpg',
          'Img/ImagesHockey-test3.jpg',
          'Img/Imageshockey-test4.jpg',
          'Img/Imageshockey-testing5.jpg',
        ],
      },
      {
        name: 'Al Obour Sporting Club',
        type: 'Synthetic ice rink',
        images: ['Img/ImagesPort_Saied_Sports_City_Hockeysyntetic_ice.jpg'],
      },
    ],
    systems: [
      { name: 'Artificial turf', image: 'img/hockey-Artificial_Grass_Floor.jpg' },
      { name: 'Synthetic ice rink', image: 'img/hockey-Rink-synthetic-Ice.jpg' },
    ],
  },
  {
    id: 'volleyball',
    propId: 5,
    name: 'Volleyball',
    category: 'Ball Sports',
    description: 'Indoor and outdoor volleyball floors in vinyl, PU, wood and acrylic.',
    cover: 'img/Voleyball-Pu_indoor_floor.jpg',
    badge: 'FIVB Standard',
    projects: [],
    systems: [
      { name: 'Indoor vinyl floor', image: 'img/Voleyball-Vinyl_floor.jpg' },
      { name: 'Indoor PU floor', image: 'img/Voleyball-Pu_indoor_floor.jpg' },
      { name: 'Indoor wood floor', image: 'img/Voleyball-wood_floor.jpg' },
      { name: 'Outdoor PU floor', image: 'img/Voleyball-Pu_outdoor_floor.jpg' },
      { name: 'Outdoor acrylic floor', image: 'img/Voleyball-Acrylic_Floor.jpg' },
    ],
  },
  {
    id: 'handball',
    propId: 7,
    name: 'Handball',
    category: 'Ball Sports',
    description: 'Indoor and outdoor handball floors in PU, wood, vinyl and acrylic.',
    cover: 'img/handball_Pu_indoor_floor.jpg',
    badge: 'IHF Standard',
    projects: [
      { name: 'Arab Contractors Sporting Club', type: 'Indoor courts', images: ['Img/ImagesUntitled-3.jpg'] },
      { name: 'Borg El Arab Stadium', type: 'Indoor hall', images: ['Img/ImagesBorg_ALArab.jpg'] },
    ],
    systems: [
      { name: 'Indoor PU floor', image: 'img/handball_Pu_indoor_floor.jpg' },
      { name: 'Indoor wood floor', image: 'img/handball_wood_floor.jpg' },
      { name: 'Indoor vinyl floor', image: 'img/handball_Vinyl_floor.jpg' },
      { name: 'Outdoor PU floor', image: 'img/handball_Pu_outdoor_floor.jpg' },
      { name: 'Outdoor acrylic floor', image: 'img/handball_Acrylic_Floor.jpg' },
    ],
  },
  {
    id: 'multipurpose',
    propId: 13,
    name: 'MultiPurpose',
    category: 'Ball Sports',
    description: 'Durable, responsive floors for courts and halls that host several sports.',
    cover: 'Img/Imagesindoorcopy.jpg',
    badge: 'Multi-Sport Standard',
    projects: [
      {
        name: 'Borg El Arab Stadium',
        type: 'Multi-purpose indoor hall',
        images: ['Img/ImagesBorg_ALArab.jpg', 'Img/ImagesUntitled-2pending%20.jpg'],
      },
      { name: 'Haileybury International School', type: 'Indoor hall', images: ['Img/Imagesindoorcopy.jpg'] },
      { name: 'Navy Base', type: 'Multipurpose court', images: ['Img/ImagesNavy-Base-.jpeg'] },
      { name: 'Heliopolis Club', images: ['Img/ImagesUntitl.jpg', 'Img/ImagesUntitle.jpg'] },
    ],
    systems: [
      { name: 'Wood floor', image: 'img/MultiPurpose_wood_floor.jpg' },
      { name: 'Indoor PU', image: 'img/MultiPurpose_Pu_indoor_floor.jpg' },
      { name: 'Indoor vinyl', image: 'img/MultiPurpose_Vinyl_floor.jpg' },
      { name: 'Outdoor acrylic', image: 'img/MultiPurpose_Acrylic_Floor.jpg' },
      { name: 'Outdoor PU', image: 'img/MultiPurpose_Pu_outdoor_floor.jpg' },
    ],
  },
  {
    id: 'playgrounds',
    propId: 6,
    name: 'Playgrounds',
    category: 'Tracks & Specialty',
    description: 'Safe, colorful rubber tiles, surfaces and equipment for children’s areas, plus climbing walls and climbing games.',
    cover: 'Img/ImagesShooting-Club--Kattamia-playground.jpg',
    badge: 'EN 1177 Safety Code',
    systemsLabel: 'Equipment & surfaces',
    systemsKind: 'Equipment',
    projects: [
      {
        name: 'Shooting Club Kattamia',
        images: [
          'Img/ImagesShooting-Club--Kattamia-playground.jpg',
          'Img/ImagesShooting-Club-Kattamia-rubber.jpg',
          'Img/Imagestest2.jpg',
          'Img/ImagesUntitled-4.jpg',
        ],
      },
    ],
    systems: [
      { name: 'Playground equipment', image: 'img/playgrounds_equipment.jpg' },
      { name: 'Rubber tiles', image: 'img/playgrounds_Rubber_tiles.jpg' },
      { name: 'Artificial grass', image: 'img/playgrounds_Artificial_Grass_Floor.jpg' },
      { name: 'Vinyl floors', image: 'img/playgrounds_Vinyl_floor.jpg' },
    ],
  },
  {
    id: 'climbing',
    propId: 16,
    name: 'Climbing Walls',
    category: 'Tracks & Specialty',
    badge: 'IFSC-certified speed wall',
    description: 'Climbing walls for competitions, gyms, schools and leisure centers, including an IFSC-certified speed wall.',
    cover: 'img/Professional_competition.jpg',
    systemsLabel: 'Applications',
    systemsKind: 'Application',
    projects: [],
    systems: [
      { name: 'Professional competition', image: 'img/Professional_competition.jpg' },
      { name: 'Climbing gyms', image: 'img/Climbing_gym.jpg' },
      { name: 'Schools & universities', image: 'img/Schools_&_universities.jpg' },
      { name: 'Leisure', image: 'img/Leisure.jpg' },
    ],
  },
  {
    id: 'landscape',
    propId: 15,
    name: 'Landscape',
    category: 'Tracks & Specialty',
    description: 'Landscape construction: hardscapes (patios, pool decks, stone, pavers, water features) and softscapes (plants, trees, grass).',
    cover: 'img/Landscape_Hardscape.jpg',
    badge: 'Hardscape & Softscape',
    systemsLabel: 'Landscape services',
    systemsKind: 'Service',
    projects: [],
    systems: [
      { name: 'Hardscapes', image: 'img/Landscape_Hardscape.jpg' },
      { name: 'Softscapes', image: 'img/Landscape_Softscape.jpg' },
    ],
  },
  {
    id: 'padbol',
    propId: 4,
    name: 'Padbol',
    category: 'Racket Sports',
    description: 'Padbol courts. Official dynamic fusion game combining football, padel and volleyball.',
    cover: null,
    badge: 'Official Padbol',
    projects: [],
    systems: [],
  },
];

export function build(raw: RawSport): SportDiscipline {
  const entries: SportGalleryEntry[] = [];
  const systemsKind = raw.systemsKind || 'Surface system';

  const projects: SportProject[] = raw.projects.map((p) => {
    const images = p.images.map(url);
    const entry = images.length ? entries.push({ kind: 'Project', title: p.name, sub: p.type, images }) - 1 : -1;
    return { ...p, images, entry };
  });

  const systems: SportSystem[] = raw.systems.map((s) => {
    const image = s.image ? url(s.image) : null;
    const entry = image ? entries.push({ kind: systemsKind, title: s.name, images: [image] }) - 1 : -1;
    return { ...s, image, entry };
  });

  return {
    ...raw,
    systemsLabel: raw.systemsLabel || 'Surface systems',
    cover: raw.cover ? url(raw.cover) : null,
    href: sitePage(raw.propId),
    projects,
    systems,
    entries,
  };
}

export const COURTS: SportDiscipline[] = RAW.map(build);

export const countLabel = (c: SportDiscipline): string => {
  if (c.projects.length) return `${c.projects.length} project${c.projects.length > 1 ? 's' : ''}`;
  if (c.systems.length) return c.systemsLabel;
  return 'Coming soon';
};

export const summary = (c: SportDiscipline): string => {
  if (c.projects.length) {
    const [a, b] = c.projects;
    const more = c.projects.length > 2 ? ` +${c.projects.length - 2}` : '';
    return b ? `${a.name}, ${b.name}${more}` : a.name;
  }
  if (c.systems.length) return c.systemsLabel;
  return 'Coming soon';
};
