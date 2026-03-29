// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import mkcert from 'vite-plugin-mkcert';

export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss(), mkcert(), vueDevTools()],
	},
	experimental: { appManifest: false },
	ssr: true,
	compatibilityDate: '2024-12-18',

	runtimeConfig: {
		public: {
			storyblokPublicToken: process.env.STORYBLOK_PUBLIC_API_TOKEN || '',
		},
	},
	modules: ['nuxt-icon', '@nuxt/image', '@storyblok/nuxt'],
	storyblok: {
		accessToken: '',
		cacheProvider: 'memory',
		apiOptions: { region: 'eu' },
	},
	icon: {
		serverBundle: {
			collections: ['uil', 'mdi'],
		},
	},
});