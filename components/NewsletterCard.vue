<script lang="ts" setup>
const props = defineProps({
	blok: Object,
	slug: String,
	published: String,
});
const publishedDate = computed(() => {
	if (!props.published) return null;
	return new Date(props.published);
});</script>

<template>
	<div v-if="blok">
		<div class="bg-white mb-8 py-8 px-6 rounded-4 shadow-m hover:shadow-lg card">
			<NuxtLink :href="`/newsletter/${slug}`" rel="noopener noreferrer">
				<div class="flex items-center gap-4 justify-between mb-4">
					<h2 v-if="blok.Title" class="text-2xl font-semibold text-gray-900">{{ blok.Title }}</h2>
					<h3 class="text-m max-h-max text-gray-400"> Published {{ publishedDate.toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					}) }}</h3>
				</div>
				<p v-if="blok.Description" v-html="renderRichText(blok.Description)"></p>
				<div class="flex items-center gap-2 justify-end">
					<p class="readmore">Read more
					</p>
					<svg class="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>
						arrow-right</title>
						<path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
					</svg>
				</div>

			</NuxtLink>
		</div>

	</div>
</template>

<style scoped>
.card:hover {
	.readmore {
		border-bottom: 1px solid black;
		padding: 1px;
	}
}

.readmore {
	border-bottom: 1px solid transparent;
	padding: 1px;
}
</style>
