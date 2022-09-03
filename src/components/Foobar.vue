<template>
  <div class="border-t px-6 border-violet-300">
    <div class="flex items-center justify-between footer-content max-w-screen-lg m-auto">
      <div class="flex flex-col space-y-3 flex-1/3">
        <router-link v-for="link in footerLinks.firstcol" :key="link.path" :to="link.path">
          {{ link.name }}
        </router-link>
      </div>
      <div class="flex flex-col space-y-3 flex-1/3">
        <router-link v-for="link in footerLinks.secondcol" :key="link.path" :to="link.path">
          {{ link.name }}
        </router-link>
        <a href="mailto:support@selene.com">Feedback</a>
      </div>
      <div class="flex flex-col space-y-3 flex-1/3">
        <a href="https://etherscan.io/address/0xD4F42C8b4F688876D79D2577e2990919d09Ad5De" target="_blank"
          class="flex items-center eth">
          <font-awesome-icon icon="fa-brands fa-ethereum" class="mr-2" />
          Donation
        </a>
        <a href="https://www.blockchain.com/btc/address/1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9" target="_blank"
          class="flex items-center">
          <font-awesome-icon icon="fa-brands fa-btc" class="mr-2" />
          Donation
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooBar",
  props: {
    footerLinks: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.footer-content {
  height: 200px;
}

a {
  text-decoration: none;
  color: #ccc8f0;
  transition: 0.15s;
}

a:hover {
  color: #fee690;
}

a.eth:hover {
  color: #3b85f6;
}

.router-link-active {
  color: #fee690;
}
</style>
