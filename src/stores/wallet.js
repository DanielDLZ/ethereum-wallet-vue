import { defineStore } from "pinia";

export const useWalletStore = defineStore({
  id: "wallet",
  state: () => ({
    mnemonic: "",
    creation: false,
  }),
  getters: {
    mnemo: (state) => state.mnemonic,
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
