<template>
  <div class="flex flex-col space-y-6">
    <v-stepper-progress :currentStep="1" class="mb-12" />
    <h1 class="text-2xl font-bold text-left">Write down these words</h1>
    <div class="flex space-x-4 justify-end">
      <div class="">
        <v-btn @click="generateWords"
          ><font-awesome-icon icon="fa-solid fa-arrow-rotate-right"
        /></v-btn>
        <select
          class="px-4 py-2 rounded-sm bg-transparent border border-indigo-200"
          v-model="selectedWordsCount"
        >
          <option
            v-for="option in options"
            :value="option.value"
            :key="option.value"
            class="bg-transparent"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <div
      class="grid grid-rows-6 grid-cols-2 gap-4 rounded-lg border border-yellow-200 px-8 py-6 md:grid-cols-4 md:grid-rows-3"
    >
      <div
        v-for="(word, index) in wordsList"
        :key="index + 'mnemo'"
        class="w-36 px-2 py-2 border rounded border-yellow-200"
      >
        <span class="text-yellow-200 select-none">{{ index + 1 + ". " }}</span
        >{{ word }}
      </div>
    </div>
    <v-btn class="bg-yellow-200 w-1/3 text-gray-900 font-bold self-center">I Wrote this</v-btn>
  </div>
</template>

<script>
import { ethers } from "ethers";

export default {
  name: "LayerMnemonic",
  data() {
    return {
      selectedWordsCount: 12,
      wordsList: [],
      options: [
        { text: "12 words", value: 12 },
        { text: "24 words", value: 24 },
      ],
    };
  },
  methods: {
    generateRandom(maxLimit = 2047) {
      let rand = Math.random() * maxLimit;
      rand = Math.floor(rand);

      return rand;
    },
    generateWords() {
      let wordlist = ethers.wordlists.en;
      this.wordsList = [];

      for (let i = 0; i < this.selectedWordsCount; i++) {
        this.wordsList.push(wordlist.getWord(this.generateRandom()));
      }
    },
  },
  watch: {
    selectedWordsCount() {
      this.generateWords();
    },
  },
  mounted() {
    this.generateWords();
  },
};
</script>
