import path from 'path';
import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://axelen.xyz',
  build: {
    format: 'directory',
  },
  integrations: [svelte(), tailwind(), image()],
});
