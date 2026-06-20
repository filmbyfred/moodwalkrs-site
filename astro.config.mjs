// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { allProjects } from './src/data/projects.ts';

// Private project slugs — pages exist (so /clients can link to them) but must
// stay out of the public sitemap & robots index.
const PRIVATE_SLUGS = allProjects.filter(p => p.private).map(p => p.slug);
const PRIVATE_PROJECT_REGEX = new RegExp(`/project/(${PRIVATE_SLUGS.join('|')})/?$`);

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.moodwalkrs.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Exclude the password-protected clients vault from the public sitemap.
      // /moodfilm STAYS in the sitemap because the page has a public SEO intro
      // — only the vault inside is private.
      filter: (page) => !/\/clients\/?$/.test(page) && !PRIVATE_PROJECT_REGEX.test(page),
    }),
  ],
  build: {
    assets: '_assets'
  },
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
