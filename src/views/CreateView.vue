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
          class="font-bold text-blue-400 hover:text-emerald-400 dark:text-yellow-200 dark:hover:text-amber-300 duration-200"
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
import { useRouter, RouterLink } from "vue-router";
import VBtnConnect from "@UI/ButtonConnect.vue";

const router = useRouter();

function createWallet(walletType) {
  router.push({
    name: "CreateWalletLayout",
    params: {
      type: walletType.toLowerCase(),
      component: walletType,
    },
  });
}
</script>

<style scoped></style>
