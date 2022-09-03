<template>
  <teleport to="body">
    <div
      class="inset-0 absolute flex flex-col justify-center z-[20] layout-background"
    >
      {{routeParameters}}
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
import { mapState } from "pinia";
import { useRouterStore } from "@/stores/routerStore";

import LayerMnemonic from "@/components/LayoutsView/LayerMnemonic.vue";
import LayerPrivateKey from "@/components/LayoutsView/LayerPrivateKey.vue";

export default {
  components: {
    LayerMnemonic,
    LayerPrivateKey,
  },
  emits: ["closeCreateWallet", "createWallet"],
  computed: {
    componentName() {
      return `Layer${this.$route.params.component}`;
    },
    ...mapState(useRouterStore, ["routeParameters"]),
  },
  methods: {
    сloseCreation() {
      this.$router.go(-1);
      this.$emit("closeCreateWallet");
    },
  },
  mounted() {
    console.log(this.routeParameters);
  },
};
</script>

<style scoped>
.layout-background {
  background-color: #0e0e18;
}
</style>
