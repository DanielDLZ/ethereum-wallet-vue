<template>
  <div class="flex flex-col space-y-6">
    <h1 class="text-2xl font-bold text-left">Write down these words</h1>
    <div class="flex space-x-4 justify-end">
      <div>
        <button @click="generateWords">
          <font-awesome-icon icon="fa-solid fa-arrow-rotate-right" />
        </button>
        <v-select :options="options" />
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
        <span class="text-yellow-200 select-none">{{ index+1 + ". " }}</span
        >{{ word }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { utils } from "ethers";
import { ref, watch, onMounted } from "vue";
import VBtn from "@UI/Button.vue";
import VSelect from "@UI/Button.vue";

const selectedWordsCount = ref(12);
const wordsList = ref([]);
const options = ref([
  { text: "12 words", value: 12 },
  { text: "24 words", value: 24 },
]);

function generateWords() {
  let mnemo = "";
  if (selectedWordsCount.value === 12) {
    mnemo = utils.entropyToMnemonic(utils.randomBytes(16));
  }
  if (selectedWordsCount.value === 24) {
    mnemo = utils.entropyToMnemonic(utils.randomBytes(32));
  }
  if (mnemo.length) {
    wordsList.value = mnemo.split(" ");
  }
}

watch(selectedWordsCount, () => {
  generateWords();
});

onMounted(() => {
  generateWords();
});
</script>

<style lang="scss" scoped></style>
