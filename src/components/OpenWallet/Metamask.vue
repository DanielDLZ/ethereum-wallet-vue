<template>
  <v-btn-connect @click="connectMetamask">Metamask</v-btn-connect>
</template>

<script setup>
import VBtnConnect from "@UI/ButtonConnect.vue";
import web3 from "web3";

const emit = defineEmits(["onConnect"]);

async function connectMetamask() {
  if (typeof window.ethereum !== "undefined") {
    const ethereum = window.ethereum;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log(ethereum);

    const account = accounts[0];
    console.log(account);
    if (account !== "undefined" && web3.utils.isAddress(account)) {
      emit("onConnect", true);
    }
  } else {
    console.log("Please install metamask!");
  }
}
</script>

<style scoped></style>
