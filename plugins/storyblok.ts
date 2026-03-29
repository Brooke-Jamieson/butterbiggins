// plugins/storyblok.ts
import StoryblokClient from 'storyblok-js-client';

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();

	const storyblokClient = new StoryblokClient({
		accessToken: config.public.storyblokPublicToken,
		cache: { clear: 'auto', type: 'memory' },
	});

	return {
		provide: { storyblokClient },
	};
});