import { defineStore } from "pinia";
import knuthShuffle from "@/utils/knuthShuffle";

export const useCreatingStore = defineStore({
  id: "creating",
  state: () => ({
    mnemonic: "",
    creation: false,
  }),
  getters: {
    getThreeRandWords: (state) => {
      let mnemonicArray = [];
      for (const iterator of Array.of(state.mnemonic.split(" "))[0].entries()) {
        mnemonicArray.push(iterator);
      }

      let result = [];
      for (let i = 0; i < 3; i++) {
        result.push(knuthShuffle(mnemonicArray).pop());
      }
      return result;
    },
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
