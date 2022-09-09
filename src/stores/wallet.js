import { defineStore } from "pinia";

export const useWalletStore = defineStore({
  id: "wallet",
  state: () => ({
    mnemonic: "",
  }),
  getters: {
    mnemo: (state) => state.mnemonic,
  },
  actions: {
    saveMnemonic(mnemonic) {
      this.mnemonic = mnemonic;
    },
    resetState() {
      this.mnemonic = "";
    },
  },
});
