import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  site: "https://andresfera99.github.io",
  base: "/astro-katana",
  output: "server",
  adapter: vercel()
});