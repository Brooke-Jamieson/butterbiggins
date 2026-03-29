<script lang="ts" setup>
// Only server-side fetch
import type { StoryblokClient } from 'storyblok-js-client';

const { $storyblokClient } = useNuxtApp() as { $storyblokClient: StoryblokClient };

// Fetch all newsletter entries
const { data } = await $storyblokClient.get('cdn/stories', {
	version: 'published',
	content_type: 'newsletterEntry',
});
</script>

<template>
	<Navbar />
	<Container>
		<section id="newsletter" class="mx-auto max-w-3xl min-h-screen">
			<h1 class="text-3xl font-semibold text-gray-900 mb-3">
				Latest Newsletter Updates
			</h1>

			<div v-if="data?.stories?.length">
				<Newsletter :blok="data.stories" />
			</div>

			<div v-else>
				<p>No newsletters found.</p>
			</div>
		</section>
	</Container>
</template>