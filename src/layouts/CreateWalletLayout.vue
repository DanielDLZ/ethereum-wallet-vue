<template>
  <teleport to="body">
    <div
      class="inset-0 absolute flex flex-col justify-start pt-24 md:pt-32 z-[20] bg-slate-100 text-slate-800 dark:bg-gray-900 dark:text-slate-50"
    >
      <button
        @click="сloseCreation()"
        class="absolute top-2 right-2 text-4xl w-10 h-10 duration-200 md:top-10 md:right-10 md:text-2xl text-emerald-400 hover:text-red-400 dark:hover:text-yellow-200 dark:text-blue-200"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <div class="px-2 mx-auto md:max-w-screen-xl md:w-700 md:mt-0">
        <component :is="layers[componentName]"></component>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import LayerMnemonic from "@/layouts/Layers/MnemonicLayer.vue";
import LayerKeystore from "@/layouts/Layers/KeystoreLayer.vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const layers = { LayerMnemonic, LayerKeystore };
const componentName = computed(() => {
  return route.params?.component;
});

function сloseCreation() {
  router.push("/wallet/create");
}
</script>

<style scoped>
.layout-background {
  background-color: #0e0e18;
}
</style>
