import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";
import vueDevTools from "vite-plugin-vue-devtools";
import mkcert from "vite-plugin-mkcert";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss(), mkcert(), vueDevTools()],
  },
  experimental: { appManifest: false },
  modules: ["nuxt-icon", "@nuxt/image", '@storyblok/nuxt'],
  compatibilityDate: "2024-12-18",
  ssr: true,
    runtimeConfig: {
      storyblokToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
      public: {
        storyblokPublicToken: process.env.STORYBLOK_API_TOKEN,
      },
    },
    modules: ["nuxt-icon", "@nuxt/image", '@storyblok/nuxt'],
    storyblok: {
      accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
      cacheProvider: 'memory',
      apiOptions: { region: 'eu' },
    },
});
