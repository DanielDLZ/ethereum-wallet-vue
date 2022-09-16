<template>
  <div class="flex flex-col space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-left">Verify</h1>
      <h4>Please select correct words based on their numbers.</h4>
    </div>
    <div class="space-y-6">
      <RadioGroup
        :name="`${correctWords[i - 1][0] + 1}word`"
        :verifyWords="verifyWords[i - 1]"
        :wordNumber="correctWords[i - 1][0] + 1"
        :index="i - 1"
        :key="'radioConfirmId' + i"
        v-for="i in verifyWords.length"
        @radio-clicked="checkWord"
      ></RadioGroup>
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
import RadioGroup from "@/components/RadioGroup.vue";
import VBtn from "@UI/Button.vue";
import knuthShuffle from "@/utils/knuthShuffle";
import { ethers } from "ethers";
import { useGlobalStore } from "@/stores/global";
import { ref, inject, watch, provide } from "vue";

//TODO: Написать выбор рандомных слов и компонент для верификации

const mnemonicList = inject("mnemonicList");

const emits = defineEmits(["backStep", "nextStep"]);

const globalStore = useGlobalStore();

const correctWords = ref(threeRandWords());
let wordlist = ethers.wordlists.en;
const verifyWords = ref(getVerifyArr());
const currentRadioGroup = ref(resetRadioGroup());

function getVerifyArr() {
  return [
    knuthShuffle([correctWords.value[0][1], getRandomWord(), getRandomWord()]),
    knuthShuffle([correctWords.value[1][1], getRandomWord(), getRandomWord()]),
    knuthShuffle([correctWords.value[2][1], getRandomWord(), getRandomWord()]),
  ];
}

function resetRadioGroup() {
  return [
    verifyWords.value[0][0],
    verifyWords.value[1][0],
    verifyWords.value[2][0],
  ];
}

function getRandomWord(range = 2047) {
  return wordlist.getWord(Math.floor(Math.random() * range));
}

function checkWord(index, word) {
  currentRadioGroup.value[index] = word;
  let result = false;
  if (
    currentRadioGroup.value[0] === correctWords.value[0][1] &&
    currentRadioGroup.value[1] === correctWords.value[1][1] &&
    currentRadioGroup.value[2] === correctWords.value[2][1]
  ) {
    result = true;
  }
  return result;
}

function extractFromRef() {
  let array = [];
  for (let i = 0; i < mnemonicList.value.length; i++) {
    array.push(mnemonicList.value[i]);
  }
  let eArr = array.entries();
  let arr = [];
  for (const iterator of eArr) {
    arr.push(iterator);
  }
  return arr;
}

function threeRandWords() {
  let wordsList = extractFromRef();
  let result = [];
  for (let i = 0; i < 3; i++) {
    result.push(knuthShuffle(wordsList).pop());
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

watch(
  () => mnemonicList.value,
  (newArg, oldArg) => {
    correctWords.value = threeRandWords();
    verifyWords.value = getVerifyArr();
    currentRadioGroup.value = resetRadioGroup();
  }
);

provide("currentRadioGroup", currentRadioGroup);
</script>

<style scoped></style>
