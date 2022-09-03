<template>
  <div
    class="max-w-xs create-content space-y-12 my-24 m-auto flex flex-col items-center justify-around md:max-w-screen-md">
    <div class="text-center">
      <h1 class="text-4xl mb-4">Access Wallet</h1>
      <h4>Please select a method to create a new wallet</h4>
      <h4>
        Already have a wallet?
        <router-link class="text-yellow-200 font-bold hover:text-amber-300 duration-200" to="/wallet/create">Create
          Wallet</router-link>
      </h4>
    </div>
    <Metamask @onConnect="connected = true" />
    <Keystore @onConnect="connected = true" />
    <Mnemonic @onConnect="connected = true" />
    <PrivateKey @onConnect="connected = true" />
  </div>
</template>

<script>
import Metamask from "@/components/OpenWallet/Metamask.vue";
import PrivateKey from "@/components/OpenWallet/PrivateKey.vue";
import Keystore from "@/components/OpenWallet/KeystoreV3.vue";
import Mnemonic from "@/components/OpenWallet/Mnemonic.vue";

export default {
  components: {
    Metamask,
    PrivateKey,
    Keystore,
    Mnemonic,
  },
  data() {
    return {
      connected: false,
    };
  },
  methods: {
    // check() {
    //   let web3 = new Web3(
    //     "wss://eth-mainnet.g.alchemy.com/v2/G7WzGrnynCABF8RyQknqIV_MjoQBlRcw"
    //   );
    //   let wallet = web3.eth.accounts.create();
    //   console.log(wallet);
    // },
  },
};
</script>

<style scoped>
</style>
