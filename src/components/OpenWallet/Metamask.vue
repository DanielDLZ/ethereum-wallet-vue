<template>
  <v-btn-connect @click="connectMetamask">Metamask</v-btn-connect>
</template>

<script>
import web3 from "web3";

export default {
  name: "MetamaskConnect",
  methods: {
    async connectMetamask() {
      if (typeof window.ethereum !== "undefined") {
        const ethereum = window.ethereum;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log(ethereum);

        const account = accounts[0];
        console.log(account);
        if (account !== "undefined" && web3.utils.isAddress(account)) {
          this.connected = true;
        }
      } else {
        console.log("Please install metamask!");
      }
    },
  },
};
</script>

<style scoped></style>
