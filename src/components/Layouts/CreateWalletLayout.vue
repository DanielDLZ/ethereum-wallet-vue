<template>
  <teleport to="body">
    <div
      class="inset-0 absolute flex flex-col justify-center z-[20] layout-background"
    >
      <v-btn
        @click="сloseCreation()"
        class="hover:text-yellow-200 fixed top-2 right-2"
        ><font-awesome-icon icon="fa-solid fa-xmark" class="text-2xl"
      /></v-btn>
      <div class="mt-48 px-2 mx-auto md:max-w-screen-xl md:mt-0">
        <component :is="layers[componentName]"></component>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import LayerMnemonic from "@/components/Layers/LayerMnemonic.vue";
import LayerPrivatekey from "@/components/Layers/LayerPrivateKey.vue";

import { ref } from "vue";

import { computed } from "@vue/reactivity";
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
