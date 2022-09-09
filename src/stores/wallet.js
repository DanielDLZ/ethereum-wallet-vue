import { defineStore } from "pinia";

export const useWalletStore = defineStore({
  id: "wallet",
  state: () => ({
    mnemonic: "",
    creation: false,
  }),
  getters: {
    
  },
  actions: {
    saveMnemonic(mnemonic) {
      this.mnemonic = mnemonic;
    },
    creationStarted() {
      this.creation = true;
    },
    resetState() {
      this.creation = false;
      this.mnemonic = "";
    },
  },
});
