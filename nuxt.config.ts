import tailwindcss from "@tailwindcss/vite";
import vueDevTools from "vite-plugin-vue-devtools";
import mkcert from "vite-plugin-mkcert";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    STORYBLOK_DELIVERY_API_TOKEN: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  },

  vite: {
    plugins: [tailwindcss(), mkcert(), vueDevTools()],
  },
  experimental: { appManifest: false },
  modules: ["nuxt-icon", "@nuxt/image"],
  compatibilityDate: "2024-12-18",
});