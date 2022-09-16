<template>
  <div
    class="max-w-xs create-content space-y-12 my-24 m-auto flex flex-col items-center justify-around md:max-w-screen-md"
  >
    <div class="text-center">
      <h1 class="text-4xl mb-4">Access Wallet</h1>
      <h4>Please select a method to create a new wallet</h4>
      <h4>
        Already have a wallet?
        <router-link
          class="font-bold text-blue-400 hover:text-emerald-400 dark:text-yellow-200 dark:hover:text-amber-300 duration-200"
          to="/wallet/create"
          >Create Wallet</router-link
        >
      </h4>
    </div>
    <Metamask @onConnect="connect" />
    <Keystore @onConnect="connect" />
    <Mnemonic @onConnect="connect" />
    <PrivateKey @onConnect="connect" />
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Metamask from "@/components/OpenWallet/Metamask.vue";
import PrivateKey from "@/components/OpenWallet/PrivateKey.vue";
import Keystore from "@/components/OpenWallet/KeystoreV3.vue";
import Mnemonic from "@/components/OpenWallet/Mnemonic.vue";
import { ref } from "vue";

const connected = ref(false);

function connect() {
  connected.value = true;
}
</script>

<style scoped></style>
