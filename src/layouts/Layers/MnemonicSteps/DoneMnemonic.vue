<template>
  <div class="flex flex-col items-center space-y-6">
    Congratulation
    <v-btn @click="router.push('/wallet/access')" large>Done</v-btn>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import VBtn from "@UI/Button.vue";

const router = useRouter();
</script>

<style scoped></style>
