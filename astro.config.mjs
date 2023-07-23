import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	experimental: {
		viewTransitions: true,
	},
	site: "https://andresfera99.github.io",
	base: "/astro-katana",
});
