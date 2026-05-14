// ===== CENTRALIZED PROJECT DATA =====
// All real Moodwalkrs work. Edit this file to add / remove / reorder projects.
// Then reference the slug(s) in content/home/home.json → work_grid.slugs[]
// to control which ones show up (and in which order) on the homepage.

export type Span = "sm" | "md" | "lg" | "xl";
export type Ratio = "1:1" | "4:5" | "9:16" | "3:2" | "16:9" | "16:10";

export interface Project {
  title: string;
  slug: string;            // URL: /project/{slug}
  category: string;        // "Commercial", "Fashion Edito", "Documentary", ...
  tag?: string;            // small pill on the card (optional)
  client?: string;
  role?: string;
  year: number;
  cover: string;           // card image (URL or /films/... path) — used as <video poster> too
  preview?: string;        // /films/{slug}-preview.mp4 — lightweight loop on hover
  video?: string;          // /films/{slug}.mp4 (local) OR Vimeo / YouTube embed URL
  description: string;
  gallery?: string[];
  credits?: Record<string, string>;
  span?: Span;             // bento layout hint
  ratio?: Ratio;
}

export const allProjects: Project[] = [
  {
    title: "Larack — Passion",
    slug: "larack-passion",
    category: "Music Video",
    tag: "Music",
    client: "Larack",
    role: "Direction · Production",
    year: 2025,
    cover: "/films/larack-passion-poster.jpg",
    preview: "/films/larack-passion-preview.mp4",
    video: "/films/larack-passion.mp4",
    description: "Music video for Larack — Passion.",
    gallery: [],
    span: "lg",
    ratio: "16:9"
  },
  {
    title: "Ares — Spec Ad",
    slug: "ares",
    category: "Commercial Spec",
    tag: "Commercial",
    client: "Ares",
    role: "Direction · Post",
    year: 2025,
    cover: "/films/ares-poster.jpg",
    preview: "/films/ares-preview.mp4",
    video: "/films/ares.mp4",
    description: "Spec commercial directed for Ares.",
    gallery: [],
    span: "md",
    ratio: "16:9"
  },
  {
    title: "Notre Agent — The French Production",
    slug: "notre-agent",
    category: "Documentary Trailer",
    tag: "Documentary",
    client: "The French Production",
    role: "Direction · Production",
    year: 2026,
    cover: "/films/notre-agent-poster.jpg",
    preview: "/films/notre-agent-preview.mp4",
    video: "/films/notre-agent.mp4",
    description: "Trailer for the documentary 'Notre Agent', produced with The French Production.",
    gallery: [],
    span: "lg",
    ratio: "16:9"
  },
  {
    title: "After Her",
    slug: "after-her",
    category: "Fashion Edito",
    tag: "Editorial",
    role: "Direction · Post",
    year: 2025,
    cover: "/films/after-her-poster.jpg",
    preview: "/films/after-her-preview.mp4",
    video: "/films/after-her.mp4",
    description: "Editorial fashion film with solo voice — 'After Her'.",
    gallery: [],
    span: "md",
    ratio: "9:16"
  },
  {
    title: "Jeep — Wrangler",
    slug: "jeep-wrangler",
    category: "Automotive Spec",
    tag: "Commercial",
    client: "Jeep",
    role: "Direction · Production · Post",
    year: 2026,
    cover: "/films/jeep-wrangler-poster.jpg",
    preview: "/films/jeep-wrangler-preview.mp4",
    video: "/films/jeep-wrangler.mp4",
    description: "Spec commercial for the Jeep Wrangler — directed and produced by Moodwalkrs.",
    gallery: [],
    span: "lg",
    ratio: "16:9"
  },
  {
    title: "Avatar — Editorial",
    slug: "avatar-edito",
    category: "Fashion Edito",
    tag: "Editorial",
    role: "Direction · AI · Post",
    year: 2025,
    cover: "/films/avatar-edito-poster.jpg",
    preview: "/films/avatar-edito-preview.mp4",
    video: "/films/avatar-edito.mp4",
    description: "Fashion editorial exploring AI-generated avatars.",
    gallery: [],
    span: "md",
    ratio: "9:16"
  },
  {
    title: "Speed Sisters",
    slug: "speed-sisters",
    category: "Experimental Film",
    tag: "Experimental",
    role: "Direction",
    year: 2025,
    cover: "/films/speed-sisters-poster.jpg",
    preview: "/films/speed-sisters-preview.mp4",
    video: "/films/speed-sisters.mp4",
    description: "Experimental short — Speed Sisters.",
    gallery: [],
    span: "lg",
    ratio: "16:9"
  },
  {
    title: "Valentino — Spec Ad",
    slug: "valentino",
    category: "Fashion Spec",
    tag: "Fashion",
    client: "Valentino",
    role: "Direction · Post",
    year: 2025,
    cover: "/films/valentino-poster.jpg",
    preview: "/films/valentino-preview.mp4",
    video: "/films/valentino.mp4",
    description: "Spec commercial directed for Valentino.",
    gallery: [],
    span: "md",
    ratio: "16:9"
  },
  {
    title: "C3 — Citroën",
    slug: "c3-citroen",
    category: "Automotive Spec",
    tag: "Commercial",
    client: "Citroën",
    role: "Direction · Post",
    year: 2026,
    cover: "/films/c3-citroen-poster.jpg",
    preview: "/films/c3-citroen-preview.mp4",
    video: "/films/c3-citroen.mp4",
    description: "Spec film for the Citroën C3.",
    gallery: [],
    span: "sm",
    ratio: "1:1"
  },
  {
    title: "INDEX — Lightswitch",
    slug: "index-lightswitch",
    category: "INDEX Series",
    tag: "Series",
    role: "Direction",
    year: 2025,
    cover: "/films/index-lightswitch-poster.jpg",
    preview: "/films/index-lightswitch-preview.mp4",
    video: "/films/index-lightswitch.mp4",
    description: "INDEX series — 'Lightswitch' chapter.",
    gallery: [],
    span: "md",
    ratio: "9:16"
  },
  {
    title: "NXT LVL — Club Manifesto",
    slug: "nxt-lvl-manifesto",
    category: "Brand Film",
    tag: "Manifesto",
    client: "NXT LVL",
    role: "Direction · Production",
    year: 2026,
    cover: "/films/nxt-lvl-manifesto-poster.jpg",
    preview: "/films/nxt-lvl-manifesto-preview.mp4",
    video: "/films/nxt-lvl-manifesto.mp4",
    description: "NXT LVL club manifesto — multi-panel commercial.",
    gallery: [],
    span: "sm",
    ratio: "1:1"
  },
  {
    title: "Processing — Art Gallery",
    slug: "processing-art-gallery",
    category: "Art / Generative",
    tag: "Art",
    role: "Direction · Tech",
    year: 2026,
    cover: "/films/processing-art-gallery-poster.jpg",
    preview: "/films/processing-art-gallery-preview.mp4",
    video: "/films/processing-art-gallery.mp4",
    description: "Generative art piece for a gallery installation.",
    gallery: [],
    span: "lg",
    ratio: "16:9"
  },
  {
    title: "Shein",
    slug: "shein",
    category: "Fashion Film",
    tag: "Fashion",
    client: "Shein",
    role: "Direction · Post",
    year: 2025,
    cover: "/films/shein-poster.jpg",
    preview: "/films/shein-preview.mp4",
    video: "/films/shein.mp4",
    description: "Fashion film directed for Shein.",
    gallery: [],
    span: "sm",
    ratio: "1:1"
  },
  {
    title: "3D Process — Control Car",
    slug: "3d-process-control",
    category: "3D Demo / R&D",
    tag: "R&D",
    role: "Tech · 3D",
    year: 2026,
    cover: "/films/3d-process-control-poster.jpg",
    preview: "/films/3d-process-control-preview.mp4",
    video: "/films/3d-process-control.mp4",
    description: "Comparative 3D process demo — control of a CG car.",
    gallery: [],
    span: "sm",
    ratio: "1:1"
  },
  {
    title: "INDEX — Break",
    slug: "index-break",
    category: "INDEX Series",
    tag: "Series",
    role: "Direction",
    year: 2025,
    cover: "/films/index-break-poster.jpg",
    preview: "/films/index-break-preview.mp4",
    video: "/films/index-break.mp4",
    description: "INDEX series — 'Break' chapter.",
    gallery: [],
    span: "sm",
    ratio: "1:1"
  },
  {
    title: "INDEX",
    slug: "index",
    category: "INDEX Series",
    tag: "Series",
    role: "Direction",
    year: 2025,
    cover: "/films/index-poster.jpg",
    preview: "/films/index-preview.mp4",
    video: "/films/index.mp4",
    description: "INDEX series — opening chapter.",
    gallery: [],
    span: "sm",
    ratio: "1:1"
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
