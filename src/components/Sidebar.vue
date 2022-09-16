<template>
  <div
    class="h-screen w-20 border-r-2 border-r-emerald-300 flex flex-col bg-gray-100"
  >
    <div class="h-20 flex justify-center items-center">
      <font-awesome-icon
        class="h-12 text-emerald-300"
        icon="fa-brands fa-ethereum"
      />
    </div>
    <div class="flex flex-col divide-y-2 divide-emerald-302">
      <v-btn
        class="hover:text-red-300 hover:bg-transparent h-16 flex flex-col items-center justify-center text-left text-emerald-300 bg-transparent"
      >
        <font-awesome-icon icon="fa-solid fa-house" />
        <span>Main</span>
      </v-btn>
      <v-btn
        class="hover:text-red-300 hover:bg-transparent h-16 flex flex-col items-center justify-center text-left text-emerald-300 bg-transparent"
      >
        <font-awesome-icon icon="fa-solid fa-paper-plane" />
        <span>Send</span>
      </v-btn>
      <v-btn
        class="hover:text-red-300 hover:bg-transparent h-16 flex flex-col items-center justify-center text-left text-emerald-300 bg-transparent"
      >
        <font-awesome-icon icon="fa-solid fa-gear" />
        <span>Settings</span>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import VBtn from "@UI/Button.vue";
</script>

<style scoped></style>
