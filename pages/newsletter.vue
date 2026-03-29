<script setup lang="ts">
import type { StoryblokClient } from "storyblok-js-client";

const { $storyblokClient } = useNuxtApp() as { $storyblokClient: StoryblokClient };

// Fetch published stories
const { data } = await $storyblokClient.get("cdn/stories", {
	version: "published",
	content_type: "newsletterEntry",
});

console.log("DATA:", data);
</script>

<template>
	<div v-if="data?.stories">
		<Newsletter :blok="data.stories" />
	</div>
</template>