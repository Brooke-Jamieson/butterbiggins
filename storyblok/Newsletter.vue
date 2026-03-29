<script async setup>
defineProps({ blok: Array });
</script>

<template>
	<NewsletterCard
		v-for="story in blok"
		:key="story.uuid"
		:blok="story.content"
		:published="story.published_at"
		:slug="story.full_slug"
	/>
</template>