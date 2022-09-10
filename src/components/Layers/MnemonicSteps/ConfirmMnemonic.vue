<template>
  <div class="flex flex-col space-y-6"></div>
</template>

<script setup>
import { utils } from "ethers";
import { useCreatingStore } from "@/stores/creating";
import { ref } from "vue";

//TODO: Написать выбор рандомных слов и компонент для верификации

const creatingStore = useCreatingStore();

const randomWords = ref([]);
</script>

<style scoped></style>
