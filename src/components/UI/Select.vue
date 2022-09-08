<template>
  <select
    class="px-4 py-2 rounded-sm bg-transparent border border-indigo-200"
    v-model="selected"
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
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["options"]);

const selected = ref(12);
</script>

<style scoped></style>
