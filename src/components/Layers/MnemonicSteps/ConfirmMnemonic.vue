<template>
  <div class="flex flex-col space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-left">Verify</h1>
      <h4>Please select correct words based on their numbers.</h4>
    </div>
    <div class="space-y-6">
      <v-radio-group
        :name="`${correctWords[0][0]}word`"
        :verifyWords="verifyWords[0]"
        :wordNumber="correctWords[0][0]"
        :index="0"
        @radio-clicked="checkWord"
      ></v-radio-group>
      <v-radio-group
        :name="`${correctWords[1][0]}word`"
        :verifyWords="verifyWords[1]"
        :wordNumber="correctWords[1][0]"
        :index="1"
        @radio-clicked="checkWord"
      ></v-radio-group>
      <v-radio-group
        :name="`${correctWords[2][0]}word`"
        :verifyWords="verifyWords[2]"
        :wordNumber="correctWords[2][0]"
        :index="2"
        @radio-clicked="checkWord"
      ></v-radio-group>
    </div>
    <div class="flex justify-center space-x-12">
      <v-btn
        class="my-12 md:mb-0 md:mt-12 w-full text-gray-900 font-bold self-center"
        @click="emits('backStep')"
        large
        >Back</v-btn
      >
      <v-btn
        class="my-12 md:mb-0 md:mt-12 w-full text-gray-900 font-bold self-center"
        @click="nextStep"
        large
        >Next</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import VRadioGroup from "@UI/RadioGroup.vue";
import VBtn from "@UI/Button.vue";
import knuthShuffle from "@/utils/knuthShuffle";
import { ethers } from "ethers";
import { useCreatingStore } from "@/stores/creating";
import { useGlobalStore } from "@/stores/global";
import { ref } from "vue";

//TODO: Написать выбор рандомных слов и компонент для верификации

const emits = defineEmits(["nextStep", "backStep"]);

const creatingStore = useCreatingStore();
const globalStore = useGlobalStore();
const correctWords = creatingStore.getThreeRandWords;

let wordlist = ethers.wordlists.en;
let onlyCorrectWords = correctWords.map((word) => word[1]);
let verifyWords = [
  knuthShuffle([correctWords[0][1], getRandomWord(), getRandomWord()]),
  knuthShuffle([correctWords[1][1], getRandomWord(), getRandomWord()]),
  knuthShuffle([correctWords[2][1], getRandomWord(), getRandomWord()]),
];
let currentRadioGroupState = [
  verifyWords[0][0],
  verifyWords[1][0],
  verifyWords[2][0],
];

function getRandomWord(range = 2047) {
  return wordlist.getWord(Math.floor(Math.random() * range));
}

function checkWord(slot, word) {
  currentRadioGroupState[slot] = word;
  let result = false;
  if (
    currentRadioGroupState[0] === onlyCorrectWords[0] &&
    currentRadioGroupState[1] === onlyCorrectWords[1] &&
    currentRadioGroupState[2] === onlyCorrectWords[2]
  ) {
    result = true;
  }

  return result;
}

function nextStep() {
  if (checkWord()) {
    globalStore.showSnack(1500, "Succes", "success");
    emits("nextStep");
  } else {
    globalStore.showSnack(2000, "You make some wrong with words", "danger");
  }
}

// correctWords[0].includes(correctWords[0][1])

const randomWords = ref([]);
</script>

<style scoped></style>
