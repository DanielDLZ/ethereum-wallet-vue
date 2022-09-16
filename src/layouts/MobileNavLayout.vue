<template>
  <teleport to="body">
    <div
      class="inset-0 h-full absolute z-[20] bg-slate-100 text-slate-800 dark:bg-gray-900 dark:text-slate-50"
    >
      <div class="flex self-start w-full px-2 justify-end">
        <button
          class="px-2 py-3 text-emerald-400 dark:text-indigo-200"
          @click="globalStore.closeMobileMenu"
        >
          <font-awesome-icon style="font-size: 26pt" icon="fa-solid fa-xmark" />
        </button>
      </div>
      <div class="flex h-2/4 flex-col justify-center">
        <div class="flex flex-col items-center space-y-4">
          <router-link
            @click="globalStore.closeMobileMenu"
            v-for="link in navLinks.siteNav"
            :to="link.path"
            :key="link.path"
            class="text-emerald-400 dark:text-indigo-200 font-bold text-xl"
            >{{ link.name }}</router-link
          >
          <router-link
            @click="globalStore.closeMobileMenu"
            v-for="link in navLinks.walletBtns"
            :to="link.path"
            :key="link.path"
            class="text-emerald-400 dark:text-indigo-200 font-bold text-xl"
            >{{ link.name }}</router-link
          >
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";

const globalStore = useGlobalStore();

const props = defineProps(["navLinks"]);
</script>

<style scoped></style>
