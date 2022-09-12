<template>
  <div class="space-y-6">
    <div
      class="flex flex-row mx-auto items-center justify-center py-6 md:px-16 border-2 border-emerald-400 dark:border-yellow-200 rounded-md"
    >
      <span class="font-bold text-lg w-4 mr-8">{{
        `${wordNumber + 1}. `
      }}</span>
      <div class="flex flex-col md:flex-row">
        <v-radio
          v-model="word"
          :label="verifyWords[0]"
          :name="name"
          :value="verifyWords[0]"
          :id="'id' + verifyWords[0]"
          checked
          class="w-36"
        ></v-radio>
        <v-radio
          v-model="word"
          :label="verifyWords[1]"
          :name="name"
          :value="verifyWords[1]"
          :id="'id' + verifyWords[1]"
          class="w-36"
        ></v-radio>
        <v-radio
          v-model="word"
          :label="verifyWords[2]"
          :name="name"
          :value="verifyWords[2]"
          :id="'id' + verifyWords[2]"
          class="w-36"
        ></v-radio>
      </div>
    </div>
  </div>
</template>

<script setup>
import VRadio from "@UI/Radio.vue";
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  verifyWords: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  wordNumber: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emits = defineEmits(["radioClicked"]);

const word = ref(props.verifyWords[0]);

onMounted(() => {
  emits("radioClicked", props.index, word.value);
});

watch(word, (newArg, oldArg) => {
  emits("radioClicked", props.index, word.value);
});
</script>

<style scoped></style>
