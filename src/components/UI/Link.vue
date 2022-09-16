<template>
  <router-link
    class="text-emerald-300 font-bold hover:text-emerald-600 dark:text-indigo-200 dark:hover:text-amber-300 dark:font-semibold duration-200"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.router-link-active {
  @apply text-red-400 dark:text-yellow-200;
}
</style>
