import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    isMobileMenu: false,
    isLayout: false,
    snackText: "",
    snackVisible: 0,
    snackType: "info",
    snackDuration: 2000,
  }),
  getters: {},
  actions: {
    openMobileMenu() {
      this.mobileMenu = true;
    },
    closeMobileMenu() {
      this.mobileMenu = false;
    },
    showSnack(duration = 2000, text = "Here must be text", snackType = "info") {
      this.snackType = snackType;
      this.snackText = text;
      this.snackVisible =
        this.snackVisible === 0 || this.snackVisible === 1 ? 2 : 1;
    },
    resetSnack() {
      this.snackText = "";
      this.snackVisible = 0;
    },
  },
});
