<script setup>
useHead({
  htmlAttrs: { lang: "en-GB" },
  title: "Butterbiggins Road Society",
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: "description",
      content:
        "Butterbiggins Road Society",
    },
  ],
  app: {
    head: {
      script: [
        {
          src: '/main.js', // must exist in /public/js/main.js
          type: 'module',
        },
      ],
    },
  },
  bodyAttrs: {
    class: 'font-display'
  }
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
