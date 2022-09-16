<template>
  <v-btn-connect @click="connectMetamask">Metamask</v-btn-connect>
</template>

<script setup>
import VBtnConnect from "@UI/ButtonConnect.vue";
import web3 from "web3";
import { useWalletStore } from "@/stores/wallet";
import { useRouter } from "vue-router";

const emit = defineEmits(["onConnect"]);
const walletStore = useWalletStore();
const router = useRouter();

async function connectMetamask() {
  if (typeof window.ethereum !== "undefined") {
    const ethereum = window.ethereum;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    const account = accounts[0];

    if (account !== "undefined" && web3.utils.isAddress(account)) {
      walletStore.openAddress(account);
      router.push("/wallet/dashboard");
      emit("onConnect", true);
    }
  } else {
    console.log("Please install metamask!");
  }
}
</script>

<style scoped></style>
