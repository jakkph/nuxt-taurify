import vuetify from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  // CSS Config
  css: ["~/assets/scss/style.scss"],

  // Vite Config
  vite: {
    plugins: [vuetify()],
  },

  // Modules Config
  modules: [
    "@pinia/nuxt",
  ],
});
