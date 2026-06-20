// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
      filter: (page) => !/\/clients\/?$/.test(page),
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
