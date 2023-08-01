import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV
    ? 'http:/localhost:3000/'
    : 'http:/localhost:3000/',
  integrations: [tailwind()],
  experimental: {
    assets: true
  }
});