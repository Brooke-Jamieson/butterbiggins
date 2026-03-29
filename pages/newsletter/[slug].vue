<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.slug as string;

const { $storyblokClient } = useNuxtApp();

const { data } = await $storyblokClient.get(`cdn/stories/${slug}`, {
	version: 'published',
});
</script>

<template>
	<Navbar />
	<Container>
		<section :id="`newsletter-entry-${slug}`" class="mx-auto max-w-3xl min-h-screen">
			<div v-if="data?.story">
				<!-- NewsletterEntry renders content, including rich text -->
				<NewsletterEntry :blok="data.story.content" />
			</div>

			<div v-else>
				<p>Newsletter entry not found.</p>
			</div>
		</section>
	</Container>
</template>