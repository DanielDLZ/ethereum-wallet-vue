<template>
  <div>
    <Sidebar class="hidden md:flex" />
    <RouterView />
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<style scoped></style>
