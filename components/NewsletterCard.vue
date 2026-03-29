<script lang="ts" setup>
defineProps({ blok: Object, slug: String });
</script>

<template>
	<div v-if="blok">
		<div class="bg-white mb-4 p-4 rounded-4">
			<NuxtLink :href="`/newsletter/${slug}`" rel="noopener noreferrer">
				<h2 v-if="blok.Title" class="text-2xl font-semibold text-gray-900 mb-2">{{ blok.Title }}</h2>
				<p v-if="blok.Description" v-html="renderRichText(blok.Description)"></p>
			</NuxtLink>
		</div>

	</div>
</template>