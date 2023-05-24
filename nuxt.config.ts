import vuetify from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  css: ["~/assets/scss/style.scss"],

  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [vuetify()],
  },
  modules: [
    "@pinia/nuxt",
  ],
});
