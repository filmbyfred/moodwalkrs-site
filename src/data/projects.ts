// ===== CENTRALIZED PROJECT DATA =====
// Edit this file to add / remove / reorder projects.
// Then reference the slug(s) in content/home/home.json → work_grid.slugs[]
// to control which ones show up (and in which order) on the homepage.

export type Span = "sm" | "md" | "lg" | "xl";
export type Ratio = "1:1" | "4:5" | "3:2" | "16:9" | "16:10";

export interface Project {
  title: string;
  slug: string;            // URL: /project/{slug}
  category: string;        // "Fashion Film", "Commercial", "CGI Product", ...
  tag?: string;            // small pill on the card (optional)
  client?: string;
  role?: string;
  year: number;
  cover: string;           // card image (URL or /images/... path) — used as <video poster> too
  preview?: string;        // /films/{slug}-preview.mp4 — lightweight loop auto-played on hover
  video?: string;          // /films/{slug}.mp4 (local) OR Vimeo / YouTube embed URL
  description: string;
  gallery?: string[];
  credits?: Record<string, string>;
  // Bento layout hints (used by WorkGrid.astro):
  span?: Span;             // sm: 4cols · md: 5-6cols · lg: 7-8cols · xl: full
  ratio?: Ratio;
}

export const allProjects: Project[] = [
  // ===== FILMS — real Moodwalkrs work =====
  {
    title: "NXT LVL — Manifesto",
    slug: "nxt-lvl-manifesto",
    category: "Manifesto Film",
    tag: "Film",
    client: "NXT LVL",
    role: "Direction · Production",
    year: 2026,
    cover: "/films/nxt-lvl-manifesto-poster.jpg",
    preview: "/films/nxt-lvl-manifesto-preview.mp4",
    video: "/films/nxt-lvl-manifesto.mp4",
    description: "A multi-panel manifesto piece opening the NXT LVL chapter.",
    gallery: [],
    span: "lg",
    ratio: "16:9"
  },
  {
    title: "Jeep",
    slug: "jeep",
    category: "Commercial",
    tag: "Commercial",
    client: "Jeep",
    role: "Direction · Production · Post",
    year: 2026,
    cover: "/films/jeep-poster.jpg",
    preview: "/films/jeep-preview.mp4",
    video: "/films/jeep.mp4",
    description: "A Jeep commercial film produced end-to-end by Moodwalkrs.",
    gallery: [],
    span: "md",
    ratio: "4:5"
  },
  {
    title: "C3 — Fashion",
    slug: "c3-fashion",
    category: "Fashion Film",
    tag: "Fashion",
    client: "C3",
    role: "Direction · Post",
    year: 2026,
    cover: "/films/c3-fashion-poster.jpg",
    preview: "/films/c3-fashion-preview.mp4",
    video: "/films/c3-fashion.mp4",
    description: "A fashion film for C3.",
    gallery: [],
    span: "sm",
    ratio: "1:1"
  },
  {
    title: "Fiat Abarth",
    slug: "fiat-abarth",
    category: "Automotive Film",
    tag: "Automotive",
    client: "Fiat",
    role: "Direction · Production",
    year: 2026,
    cover: "/films/fiat-abarth-poster.jpg",
    preview: "/films/fiat-abarth-preview.mp4",
    video: "/films/fiat-abarth.mp4",
    description: "Automotive film for Fiat Abarth.",
    gallery: [],
    span: "md",
    ratio: "4:5"
  },
  {
    title: "Neon Empire",
    slug: "neon-empire",
    category: "Editorial Series",
    tag: "Series",
    year: 2025,
    cover: "https://picsum.photos/seed/mw-neon/1200/1200",
    description: "Editorial series mixing neon photography and AI compositing for a fashion magazine.",
    gallery: [],
    span: "sm",
    ratio: "1:1"
  },
  {
    title: "Myth Lab",
    slug: "myth-lab",
    category: "Brand Film",
    year: 2025,
    cover: "https://picsum.photos/seed/mw-myth/1200/1200",
    description: "A brand film exploring modern mythology with fully generative worlds.",
    gallery: [],
    span: "sm",
    ratio: "1:1"
  },
  {
    title: "Orbit — Spring / Summer",
    slug: "orbit-ss",
    category: "Campaign",
    tag: "Campaign",
    year: 2026,
    cover: "https://picsum.photos/seed/mw-orbit/1600/900",
    description: "SS26 fashion campaign — film, stills and motion delivered end-to-end.",
    gallery: [],
    span: "lg",
    ratio: "16:9"
  },
  {
    title: "Ghost Protocol",
    slug: "ghost-protocol",
    category: "Beauty Campaign",
    year: 2025,
    cover: "https://picsum.photos/seed/mw-ghost/1200/1500",
    description: "Beauty campaign with a couture twist — generative skin, real talent.",
    gallery: [],
    span: "md",
    ratio: "4:5"
  },
  {
    title: "Halo 001",
    slug: "halo-001",
    category: "Tech Launch",
    tag: "Product",
    year: 2026,
    cover: "https://picsum.photos/seed/mw-halo/1600/1000",
    description: "Product launch film blending in-camera macro with AI environments.",
    gallery: [],
    span: "lg",
    ratio: "16:10"
  },
  {
    title: "Ember — Fragrance",
    slug: "ember-fragrance",
    category: "Fragrance Campaign",
    year: 2026,
    cover: "https://picsum.photos/seed/mw-ember/1600/1000",
    description: "A fragrance campaign with heat, light and smoke simulated at film-grade.",
    gallery: [],
    span: "lg",
    ratio: "16:10"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find(p => p.slug === slug);
}

export function getProjectsInOrder(slugs: string[]): Project[] {
  return slugs
    .map(s => allProjects.find(p => p.slug === s))
    .filter((p): p is Project => !!p);
}
