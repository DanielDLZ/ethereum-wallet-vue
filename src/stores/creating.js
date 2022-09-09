import { defineStore } from "pinia";

export const useCreatingStore = defineStore({
  id: "creating",
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
