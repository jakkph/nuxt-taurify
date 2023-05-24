import { defineStore } from "pinia";

export const useCustomizerStore = defineStore("Customizer", {
  state: () => ({
    drawer: false,
  }),

  getters: {},

  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
