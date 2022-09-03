<template>
  <div class="border-b border-violet-300">
    <div
      class="flex px-3 h-12 md:h-16 md:px-1 max-w-screen-lg m-auto items-center justify-between md:justify-center my-2">
      <div class="md:w-24">
        <router-link :to="navLinks.logoPath">
          <font-awesome-icon icon="fa-brands fa-ethereum" style="font-size: 26pt" class="logo" />
        </router-link>
      </div>
      <div class="md:hidden">
        <button @click="$emit('mobileMenu')" class="px-0 py-0">
          <font-awesome-icon style="font-size: 22pt" icon="fa-solid fa-bars" />
        </button>
      </div>
      <div class="flex-auto hidden md:block">
        <router-link class="mx-4 text-md font-semibold" v-for="link in navLinks.siteNav" :key="link.path"
          :to="link.path">{{ link.name }}</router-link>
      </div>
      <div class="space-x-4 justify-end flex-auto hidden md:flex text-right">
        <v-switch-button fieldId="qwer" v-model:checked="check" value="qwer" class="mr-4 pt-0.5" />
        <router-link class="text-md font-semibold" v-for="btn in navLinks.walletBtns" :key="btn.path" :to="btn.path">{{
            btn.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["navLinks"],
  emits: ["mobileMenu"],
  data() {
    return {
      check: true,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #ccc8f0;
  transition: 0.15s;
}

a:hover {
  text-decoration: none;
  color: #fee690;
  transition: 0.15s;
}

.logo {
  color: #ccc8f0;
}

.router-link-active {
  color: #fee690;
}
</style>
