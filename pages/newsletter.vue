<script lang="ts" setup>
import type { StoryblokClient } from 'storyblok-js-client';

const { $storyblokClient } = useNuxtApp() as { $storyblokClient: StoryblokClient };

// Fetch published stories
const { data } = await $storyblokClient.get('cdn/stories', {
	version: 'published',
	content_type: 'newsletterEntry',
});
</script>

<template>
	<Navbar />
	<Container>
		<section id="newsletter" class="mx-auto max-w-3xl min-h-screenmx-auto max-w-3xl">
			<h1 class="text-3xl font-semibold text-gray-900 mb-3">
				Newsletter
			</h1>
			<div v-if="data?.stories">
				<Newsletter :blok="data.stories" />
			</div>
		</section>
	</Container>
</template>