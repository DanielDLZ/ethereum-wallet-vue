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
        <component :is="componentName"></component>
      </div>
    </div>
  </teleport>
</template>

<script>
import LayerMnemonic from "@/components/Layers/LayerMnemonic.vue";
import LayerPrivatekey from "@/components/Layers/LayerPrivateKey.vue";

export default {
  components: {
    LayerMnemonic,
    LayerPrivatekey,
  },
  emits: ["closeCreateWallet", "createWallet"],
  computed: {
    componentName() {
      return `Layer${this.$route.params?.component}`;
    },
  },
  methods: {
    сloseCreation() {
      this.$router.push("/wallet/create");
      this.$emit("closeCreateWallet");
    },
  },
};
</script>

<style scoped>
.layout-background {
  background-color: #0e0e18;
}
</style>
