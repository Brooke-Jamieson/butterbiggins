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
import { StoryblokRichText } from "@storyblok/vue";
import type { StoryblokRichTextDocumentNode } from "@storyblok/vue";

const config = useRuntimeConfig();
const token = config.STORYBLOK_DELIVERY_API_TOKEN;

// Server-only fetch: token never reaches client
const { data: entriesData } = await useAsyncData(
    "newsletterEntries",
    async () => {
      const res = await $fetch("https://api.storyblok.com/v2/cdn/stories", {
        params: {
          token,
          version: "draft",
          content_type: "newsletterEntry",
          sort_by: "first_published_at:desc",
        },
      });
      return res.stories ?? [];
    },
    { server: true } // key: runs only on server
);

const entries = entriesData.value ?? [];

// Safe Rich Text helper
const safeDoc = (entry: any): StoryblokRichTextDocumentNode => {
  if (entry?.content?.announcement?.type === "doc") return entry.content.announcement;
  return { type: "doc", content: [] };
};
</script><style scoped>
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