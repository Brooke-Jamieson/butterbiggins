<script setup lang="ts" async>
const storyblokApi = useStoryblokApi()

const { data } = await storyblokApi.get('cdn/stories', {
	version: 'draft',
	content_type: 'newsletterEntry'
})

console.log('DATA:', data)
</script>

<template>
	<div v-if="data?.stories">
		<Newsletter :blok="data.stories" />
	</div>
</template>