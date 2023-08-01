import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV
    ? 'http:/localhost:3000/'
    : 'https://removebg-bulk.netlify.app/',
  integrations: [tailwind()],
  experimental: {
    assets: true
  }
});