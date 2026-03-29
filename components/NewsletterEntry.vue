<script lang="ts" setup>
defineProps({ blok: Object });
import { renderStoryblokRichText } from '../utils/renderStoryblokRichText';
</script>

<template>
	<div v-if="blok" v-editable="blok" class="p-8">
		<button class="cursor-pointer mb-4 flex items-center gap-2" type="button" @click="$router.back()">
			<svg class="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.5 4l1.4 1.4L9.8 10.5H20v2H9.8l5.1 5.1L13.5 19 6 11.5z" fill="currentColor" />
			</svg>
			Back
		</button>
		<h1 v-if="blok.Title" class="text-3xl font-semibold text-gray-900 mb-6">{{ blok.Title }}</h1>

		<div v-if="blok.Body" v-html="renderStoryblokRichText(blok.Body)"></div>
	</div>
</template>