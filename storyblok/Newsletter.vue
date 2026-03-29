<script async setup>
defineProps({ blok: Array });
</script>

<template>
	<NewsletterEntry
		v-for="story in blok"
		:key="story.uuid"
		:blok="story.content"
	/>
</template>