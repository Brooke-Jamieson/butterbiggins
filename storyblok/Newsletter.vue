<script setup async>
defineProps({ blok: Array })
</script>

<template>
	<Navbar />

	<main>
		<h1>Butterbiggins Newsletter Updates</h1>
		<NewsletterEntry
			v-for="story in blok"
			:key="story.uuid"
			:blok="story.content"
		/>
	</main>
</template>