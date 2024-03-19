import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    imageService: false
  }),
  integrations: [tailwind({
    // Example: Allow writing nested CSS declarations
    // alongside Tailwind's syntax
    nesting: true
  }), svelte()]
});