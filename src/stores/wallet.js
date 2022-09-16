import { defineStore } from "pinia";

export const useWalletStore = defineStore({
  id: "wallet",
  state: () => ({
    mnemonic: "",
    address: "",
    isOpen: false,
  }),
  getters: {
    mnemo: (state) => state.mnemonic,
  },
  actions: {
    openAddress(address) {
      this.address = address;
      this.isOpen = true;
    },
    resetState() {
      this.mnemonic = "";
    },
  },
});
