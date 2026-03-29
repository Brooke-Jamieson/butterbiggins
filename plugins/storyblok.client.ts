import { StoryblokClient } from 'storyblok-js-client'

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()
	const client = new StoryblokClient({
		accessToken: config.storyblokToken, // PRIVATE, never exposed to client
		cache: { clear: 'auto', type: 'memory' },
	})
	return { provide: { storyblokClient: client } }
})