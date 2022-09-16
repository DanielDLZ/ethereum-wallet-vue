<template>
  <div class="border-b border-emerald-300 dark:border-violet-300">
    <div
      class="flex px-8 h-12 md:h-16 md:px-8 max-w-screen-lg m-auto items-center justify-between md:justify-center"
    >
      <div class="md:w-24">
        <v-link :to="navLinks.logoPath">
          <font-awesome-icon
            icon="fa-brands fa-ethereum"
            style="font-size: 26pt"
            class="text-emerald-300 dark:text-violet-300"
          />
        </v-link>
      </div>
      <div class="flex-auto hidden md:block">
        <v-link
          class="mx-4 text-md"
          v-for="link in navLinks.siteNav"
          :key="link.path"
          :to="link.path"
          >{{ link.name }}</v-link
        >
      </div>
      <div
        class="space-x-4 md:hidden mr-5 justify-end flex-auto flex text-right"
      >
        <v-switch-button :checked="check" class="mt-0.5" @click="switchBtn()" />
      </div>
      <div class="md:hidden">
        <button
          @click="globalStore.openMobileMenu"
          class="px-0 py-0 text-emerald-300 dark:text-indigo-200"
        >
          <font-awesome-icon style="font-size: 22pt" icon="fa-solid fa-bars" />
        </button>
      </div>
      <div class="space-x-4 justify-end flex-auto hidden md:flex text-right">
        <v-switch-button :checked="check" class="mt-0.5" @click="switchBtn()" />
        <v-link
          class="text-md font-semibold"
          v-for="btn in navLinks.walletBtns"
          :key="btn.path"
          :to="btn.path"
          >{{ btn.name }}</v-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import VSwitchButton from "@UI/SwitchButton.vue";
import VLink from "@UI/Link.vue";
import { useGlobalStore } from "@/stores/global";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const props = defineProps(["navLinks"]);

const check = ref(true);

const globalStore = useGlobalStore();

function switchBtn() {
  check.value = !check.value;
  toggleDark();
}

onMounted(() => {
  if (localStorage.getItem("vueuse-color-scheme") === "auto") {
    check.value = false;
  } else {
    check.value = true;
  }
});
</script>

<style scoped></style>
