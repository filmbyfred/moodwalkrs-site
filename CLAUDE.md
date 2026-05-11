# CLAUDE.md — moodwalkrs.com

## Qui / Quoi

**Moodwalkrs** — AI Creative Studio. Quality driven. Create · Produce · Accelerate.
Baseline : "Work with Us or Walk with Us".
Site : https://www.moodwalkrs.com
Positionnement : studio créatif AI hybride (production, direction, VFX, tooling) pour marques / agences / productions.

## Stack technique

- **Framework** : Astro v5.17.1 (static, `output: 'static'`)
- **Hébergement** : GitHub Pages (à connecter) — deploy manuel via `git push origin main`
- **Animations** : GSAP + ScrollTrigger (scroll reveals, parallax léger, word-by-word manifesto)
- **Scroll** : Lenis (smooth scroll)
- **Typos** : Archivo Black (display), Inter Tight (body), JetBrains Mono (labels)
- **Langue** : Site en anglais (lang="en")
- **Build** : `npm run build` → `astro build` → `dist/`

## Design system

```css
--bg: #0A0A0A;           /* fond principal, quasi-noir */
--bg-2: #111111;
--fg: #F3F0E8;           /* texte principal, blanc chaud */
--muted: #8A8880;        /* texte secondaire */
--line: #1F1F1F;         /* bordures fines */
--acid: #D8FF3A;         /* accent walk-signal (vert acide) */
--acid-dim: #A8C528;
--container-max: 1400px;
--pad-x: clamp(20px, 4vw, 60px);
```

Concept : noir profond + accent vert acide évoque un signal "walk". Typographie display massive, animations "walk-in" des lettres du wordmark.

## Architecture des fichiers

```
moodwalkrs-site/
├── content/home/home.json         # Blocs de la homepage (éditorial)
├── src/
│   ├── components/                # Composants Astro
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Marquee.astro
│   │   ├── Manifesto.astro
│   │   ├── WorkGrid.astro         # Bento grid des projets
│   │   ├── Capabilities.astro     # 4 verbes (Create/Produce/Direct/Accelerate)
│   │   ├── Crew.astro             # rôles + stats
│   │   ├── Clients.astro          # scroller de noms
│   │   ├── Awards.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Cursor.astro
│   │   └── Grain.astro
│   ├── data/
│   │   ├── projects.ts            # TOUS les projets (central)
│   │   └── site.ts                # nav, socials, contact, brand
│   ├── layouts/BaseLayout.astro   # SEO, fonts, scripts, preloader
│   ├── pages/
│   │   ├── index.astro            # Homepage (lit home.json + projects.ts)
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── contact.astro
│   │   └── project/[slug].astro   # Page projet dynamique
│   ├── scripts/
│   │   ├── gsap-setup.ts          # ScrollTrigger reveals + manifesto reveal
│   │   ├── lenis.ts               # smooth scroll
│   │   └── cursor.ts              # curseur custom (désactivé sur mobile)
│   └── styles/
│       ├── global.css             # reset, variables, base
│       ├── typography.css         # classes typo
│       └── components.css         # composants (nav, cards, marquee, ...)
├── public/
│   └── images/                    # assets statiques (cases, logos, portraits)
└── astro.config.mjs
```

## Système éditorial de la Homepage

La homepage est construite par **blocs** dans `content/home/home.json`. Chaque bloc a un `_template`.

### Templates disponibles

| Template          | Description                                           | Propriétés clés |
|-------------------|-------------------------------------------------------|-----------------|
| `hero`            | Wordmark MOODWALKRS + tagline + CTA                   | `tagline`, `desc`, `cta` |
| `marquee`         | Bande défilante (texte répété)                        | `words[]`, `reverse` |
| `manifesto`       | Bloc corpus mot-par-mot revealing au scroll + citation optionnelle | `text`, `quote`, `metaLeft`, `metaRight` |
| `work_grid`       | Grille bento des projets (lit `src/data/projects.ts`) | `slugs[]` (ordre), `allLink` |
| `capabilities`    | 4 verbes                                              | `items[]` |
| `crew`            | Intro + stats + founders + disciplines + closing      | `intro`, `stats[]`, `founders[]`, `roles[]`, `closing` |
| `clients`         | Scroller horizontal de noms clients                   | `names[]` |
| `awards`          | Grille awards + presse — composant **disponible mais désactivé** en attendant de vrais awards. Pour réactiver : ajouter un bloc `{ "_template": "awards", "label": "05 · Recognition", "title": "Press & <em>awards.</em>", "items": [{"name": "...", "year": "..."}] }` dans `home.json` | `items[]` |
| `contact`         | Bloc final Work / Walk + email                        | `email`, `cta` |

Ajouter / retirer un bloc : éditer le tableau `blocks` dans `home.json`. L'ordre dans le JSON = l'ordre à l'écran.

## Données projets (`src/data/projects.ts`)

Chaque projet a :

```ts
interface Project {
  title: string;
  slug: string;            // URL: /project/{slug}
  category: string;        // "Fashion Film", "Commercial", "CGI", ...
  tag?: string;            // petit label affiché sur la card (optional)
  client?: string;
  role?: string;
  year: number;
  cover: string;           // image/GIF de la card
  video?: string;          // lien Vimeo/YouTube embed (optional)
  description: string;
  gallery?: string[];
  credits?: Record<string, string>;
  // Layout hint for the bento grid:
  span?: "sm" | "md" | "lg" | "xl";
  ratio?: "1:1" | "4:5" | "3:2" | "16:9" | "16:10";
}
```

Le composant `WorkGrid.astro` lit la liste et applique les spans de la grille bento automatiquement.

## Conventions

### Git
- Remote à créer : `git@github.com:moodwalkrs/moodwalkrs-site.git` (à confirmer avec Fred)
- Push manuel : `git add [fichiers] && git commit -m "message" && git push origin main`

### Images
- Toutes les visuals dans `/public/images/`
- Naming : `{projet-slug}/cover.jpg`, `{projet-slug}/gallery-01.jpg`, etc.
- Formats : JPG / WebP pour photos, GIF / MP4 pour previews animés
- GIFs lourds (> 2 MB) : envisager MP4 muet autoplay à la place

### Ajout d'un nouveau projet
1. Mettre le ou les visuels dans `public/images/{slug}/`
2. Ajouter l'objet dans `allProjects` (`src/data/projects.ts`)
3. Référencer le `slug` dans `home.json` si on veut l'afficher en page d'accueil
4. `npm run build && git push`

## Animations GSAP

Fichier : `src/scripts/gsap-setup.ts`
- `.reveal` → fade + slide up quand l'élément entre à 85 % du viewport
- `.reveal-stagger > *` → reveal séquentiel des enfants
- `.work-card` → légère scale + gradient overlay au scroll
- `#manifestoText .word` → chaque mot passe de 0.18 à 1 opacité selon la progression du scroll

## Performances

- Images en `loading="lazy"`
- ScrollTrigger.refresh() sur load + timeout pour les GIFs lourds
- Lenis smooth scroll
- Film grain overlay (opacity 0.04)
- Pas de framework JS côté client (vanilla TS uniquement)

## Liens utiles

- Site actuel : https://www.moodwalkrs.com
- Instagram : https://www.instagram.com/moodwalkrs
- Inspiration DA : https://www.humainmade.com

## Notes pour Claude (sessions futures)

- Quand Fred dit « ajoute un projet », l'ordre standard est : visuel dans `/public/images/{slug}/`, entrée dans `projects.ts`, référence éventuelle dans `home.json`.
- La DA est volontairement plus audacieuse que humainmade.com : on garde le noir profond mais on ose le vert acide comme signal "walk".
- Garder le lang="en" — le site est international.
- Les stats / chiffres dans la section Crew sont des placeholders faciles à ajuster dans `home.json > meta.crew`.
