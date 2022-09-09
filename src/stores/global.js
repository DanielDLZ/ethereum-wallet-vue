import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    mobileMenu: false,
  }),
  getters: {},
  actions: {
    openMobileNav() {
      this.mobileMenu = true;
    },
    closeMobileNav() {
      this.mobileMenu = false;
    },
  },
});
