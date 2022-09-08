<template>
  <teleport to="body">
    <div
      class="inset-0 absolute flex flex-col justify-center z-[20] bg-slate-100 text-slate-800 dark:bg-gray-900 dark:text-slate-50"
    >
      <button
        @click="сloseCreation()"
        class="absolute top-10 right-10 w-10 h-10 duration-200 text-emerald-400 hover:text-red-400 dark:hover:text-amber-400 dark:text-indigo-200"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" class="text-2xl" />
      </button>
      <div class="mt-48 px-2 mx-auto md:max-w-screen-xl md:mt-0">
        <component :is="layers[componentName]"></component>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import LayerMnemonic from "@/components/Layers/LayerMnemonic.vue";
import LayerPrivatekey from "@/components/Layers/LayerPrivateKey.vue";
import VBtn from "@UI/Button.vue";

import { ref } from "vue";

import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const emit = defineEmits(["closeCreateWallet", "createWallet"]);

const route = useRoute();
const router = useRouter();

const layers = { LayerMnemonic, LayerPrivatekey };

const componentName = computed(() => {
  return ref(route.params?.component).value;
});

function сloseCreation() {
  router.push("/wallet/create");
  emit("closeCreateWallet");
}
</script>

<style scoped>
.layout-background {
  background-color: #0e0e18;
}
</style>
