<template>
  <div class="flex flex-col space-y-6">
    <h1 class="text-2xl font-bold text-left">Write down these words</h1>
    <div class="flex space-x-4 justify-end">
      <button
        @click="generateWords"
        class="mr-4 duration-200 hover:rotate-45 text-emerald-400 hover:text-red-400 dark:text-blue-200 dark:hover:text-yellow-200"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-rotate-right" />
      </button>
      <v-select :options="options" @option-update="setNewOption" />
    </div>
    <div
      class="grid grid-rows-6 grid-cols-2 gap-4 rounded-lg px-8 py-6 border-2 border-emerald-400 dark:border-yellow-200 md:grid-cols-4 md:grid-rows-3"
    >
      <div
        v-for="(word, index) in wordsList"
        :key="index + 'mnemo'"
        class="w-36 px-2 py-2 border rounded border-emerald-400 dark:border-yellow-200"
      >
        <span
          class="text-emerald-400 dark:text-yellow-200 font-semibold select-none"
          >{{ index + 1 + ". " }}</span
        >{{ word }}
      </div>
    </div>
    <div class="flex justify-center space-x-12">
      <v-btn
        class="my-12 md:mb-0 md:mt-12 w-full text-gray-900 font-bold self-center"
        @click="emits('nextStep')"
        large
        >I Wrote these words</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import VSelect from "@UI/Select.vue";
import VBtn from "@UI/Button.vue";
import { utils } from "ethers";
import { ref, watch, onMounted } from "vue";
import { useCreatingStore } from "@/stores/creating";

const emits = defineEmits(["nextStep"]);

const creatingStore = useCreatingStore();

const options = ref([
  { text: "12 words", value: 16 },
  { text: "24 words", value: 32 },
]);

const selectedOption = ref(options.value[0]);
const wordsList = ref([]);

function generateWords() {
  let mnemo = utils.entropyToMnemonic(
    utils.randomBytes(selectedOption.value.value)
  );
  if (mnemo.length) {
    wordsList.value = mnemo.split(" ");
    creatingStore.saveMnemonic(wordsList.value.join(" "));
  }
}

function setNewOption(newOption) {
  selectedOption.value = newOption;
}

function nextStep() {}

watch(selectedOption, () => {
  generateWords();
});

onMounted(() => {
  generateWords();
});
</script>

<style scoped></style>
