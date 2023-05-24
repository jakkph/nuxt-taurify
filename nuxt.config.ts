import vuetify from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    (options, nuxt) => {
      nuxt.hook("vite:extendConfig", (config: any) => {
        config.plugins.push(vuetify());
        return config;
      });
    },

    "@pinia/nuxt",
  ],
  css: ["~/assets/scss/style.scss"],
  pinia: {
	autoImports: [
		// automatically imports `defineStore`
		'defineStore', // import { defineStore } from 'pinia'
		['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
	  ],
  },
  ssr: false, 
});
