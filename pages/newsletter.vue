<template>
  <Navbar />

  <section class="mx-auto max-w-5xl px-6 py-12">
    <h1 class="text-3xl font-semibold mb-8">Newsletter</h1>

    <div v-if="entries.length === 0">
      <p>Loading newsletter entries...</p>
    </div>

    <div v-else class="flex flex-col gap-4">
      <div
          v-for="entry in entries"
          :key="entry.uuid"
          class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <h2 class="text-xl font-bold mb-2">{{ entry.name }}</h2>
        <StoryblokRichText :doc="safeDoc(entry)" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { StoryblokRichText } from "@storyblok/vue";
import type { StoryblokRichTextDocumentNode } from "@storyblok/vue";

const entries = ref<any[]>([]);

// Storyblok configuration
const STORYBLOK_BASE_URL = "https://api.storyblok.com/v2/cdn";
const STORYBLOK_TOKEN = useRuntimeConfig().public.STORYBLOK_DELIVERY_API_TOKEN;

// Fetch all newsletterEntry stories
try {
  const { data } = await useFetch(`${STORYBLOK_BASE_URL}/stories`, {
    params: {
      token: STORYBLOK_TOKEN,
      version: "draft",           // "draft" for preview, "published" for live
      content_type: "newsletterEntry",
      sort_by: "first_published_at:desc",
    },
  });

  entries.value = data.value?.stories ?? [];

  if (entries.value.length === 0) {
    console.warn("Storyblok: No newsletterEntry stories found.");
  }
} catch (err) {
  console.error("Storyblok fetch failed:", err);
}

// Helper to safely pass a Rich Text document to StoryblokRichText
const safeDoc = (entry: any): StoryblokRichTextDocumentNode => {
  if (entry?.content?.Description?.type === "doc") {
    return entry.content.Description;
  }
  return { type: "doc", content: [] }; // fallback empty doc
};
</script>

<style scoped>
/* Basic card layout */
.grid {
  display: grid;
  gap: 1.5rem;
}

.card {
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background-color: white;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
</style>