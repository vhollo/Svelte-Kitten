import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [
		sveltePreprocess(),
		mdsvex(mdsvexConfig),
	],
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;