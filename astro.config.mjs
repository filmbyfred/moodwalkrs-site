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
