<template>
  <div class="h-screen">
    <RouterView />
    <Snackbar
      :isVisible="globalStore.snackVisible"
      :text="globalStore.snackText"
      :snackType="globalStore.snackType"
      :snackDuration="globalStore.snackDuration"
    ></Snackbar>
  </div>
</template>

<script setup>
import Snackbar from "@/components/Snackbar.vue";

import { useGlobalStore } from "@/stores/global";
// import { useWalletStore } from "@/stores/wallet";

const globalStore = useGlobalStore();
// const walletStore = useWalletStore();
</script>

<style>
body {
  @apply bg-slate-100 text-slate-800 dark:bg-gray-900 dark:text-slate-50;
}
</style>
