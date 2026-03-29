<script setup lang="ts">
defineProps({ blok: Object })
import { renderRichText } from '../utils/storyblokRichText'
</script>

<template>
	<div v-if="blok" v-editable="blok">
		<div>
			<h2 v-if="blok.Title">{{ blok.Title }}</h2>
			<p v-if="blok.Description" v-html="renderRichText(blok.Description)"></p>
		</div>

		<div v-if="blok.Body" v-html="renderRichText(blok.Body)"></div>
	</div>
</template>