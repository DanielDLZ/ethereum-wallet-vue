<template>
  <teleport to="body">
    <div v-if="show" class="inset-0 h-full absolute z-[20] mobile-background">
      <div class="flex self-start w-full px-2 justify-end">
        <button class="px-2 py-3" @click="$emit('closeMenu')">
          <font-awesome-icon style="font-size: 26pt" icon="fa-solid fa-xmark" />
        </button>
      </div>
      <div class="flex h-2/4 flex-col justify-center">
        <div class="flex flex-col items-center space-y-4">
          <router-link
            @click="$emit('closeMenu')"
            v-for="link in navLinks.siteNav"
            :to="link.path"
            :key="link.path"
            >{{ link.name }}</router-link
          >
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["show", "navLinks"]);

const emit = defineEmits(["closeMenu"]);
</script>

<style scoped>
.mobile-background {
  background-color: #0e0e18;
}
</style>
