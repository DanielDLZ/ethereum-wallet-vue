<template>
  <div class="border-t px-6 border-emerald-400 dark:border-violet-300">
    <div
      class="flex items-center justify-between footer-content max-w-screen-lg m-auto"
    >
      <div class="flex flex-col space-y-3 flex-1/3">
        <v-link
          v-for="link in footerLinks.firstcol"
          :key="link.path"
          :to="link.path"
        >
          {{ link.name }}
        </v-link>
      </div>
      <div class="flex flex-col space-y-3 flex-1/3">
        <v-link
          v-for="link in footerLinks.secondcol"
          :key="link.path"
          :to="link.path"
        >
          {{ link.name }}
        </v-link>
        <a
          class="text-emerald-400 hover:text-emerald-600 dark:text-indigo-200 dark:hover:text-yellow-300 duration-200"
          href="mailto:support@selene.com"
          >Feedback</a
        >
      </div>
      <div class="flex flex-col space-y-3 flex-1/3">
        <a
          href="https://etherscan.io/address/0xD4F42C8b4F688876D79D2577e2990919d09Ad5De"
          target="_blank"
          class="flex items-center eth text-emerald-400 hover:text-emerald-600 dark:text-indigo-200 dark:hover:text-yellow-300 duration-200"
        >
          <font-awesome-icon icon="fa-brands fa-ethereum" class="mr-2" />
          Donation
        </a>
        <a
          href="https://www.blockchain.com/btc/address/1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9"
          target="_blank"
          class="flex items-center btc text-emerald-400 hover:text-emerald-600 dark:text-indigo-200 dark:hover:text-yellow-300 duration-200"
        >
          <font-awesome-icon icon="fa-brands fa-btc" class="mr-2" />
          Donation
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import VLink from "./UI/VLink.vue";

const props = defineProps({
  footerLinks: {
    type: Object,
  },
});
</script>

<style scoped>
a {
  @apply font-bold;
}
.footer-content {
  height: 200px;
}

a.eth:hover {
  color: #3b85f6;
}
a.btc:hover {
  @apply text-yellow-300;
}
</style>
