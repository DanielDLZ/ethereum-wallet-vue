<template>
  <div
    class="max-w-xs space-y-12 my-24 m-auto flex flex-col items-center justify-around md:max-w-screen-md"
  >
    <div class="text-center">
      <h1 class="text-4xl mb-4">Create Wallet</h1>
      <h4>Please select a method to create a new wallet</h4>
      <h4>
        Already have a wallet?
        <router-link
          class="text-yellow-200 font-bold hover:text-amber-300 duration-200"
          to="/wallet/access"
          >Access Wallet</router-link
        >
      </h4>
    </div>
    <v-btn-connect @click="createWallet('Mnemonic')">Mnemonic</v-btn-connect>
    <v-btn-connect @click="createWallet('PrivateKey')"
      >Private Key</v-btn-connect
    >
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const emit = defineEmits(["createWallet"]);
const router = useRouter();

function createWallet(walletType) {
  router.push({
    name: "CreateWalletLayout",
    params: {
      type: walletType.toLowerCase(),
      component: walletType,
    },
  });

  emit("createWallet");
}
</script>

<style scoped></style>
