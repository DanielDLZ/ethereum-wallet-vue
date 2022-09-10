import { defineStore } from "pinia";

export const useCreatingStore = defineStore({
  id: "creating",
  state: () => ({
    mnemonic: "",
    creation: false,
  }),
  getters: {
    getThreeRandWords: (state) => {
      function shuffle(array) {
        let currentIndex = array.length,
          randomIndex;

        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }

        return array;
      }
      
      let mnemonicArray = [];
      for (const iterator of Array.of(state.mnemonic.split(" "))[0].entries()) {
        mnemonicArray.push(iterator);
      }

      let result = [];
      for (let i = 0; i < 3; i++) {
        result.push(shuffle(mnemonicArray).pop());
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
