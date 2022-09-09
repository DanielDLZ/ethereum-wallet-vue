<template>
  <div
    class="h-screen"
    :class="
      walletStore.creation || globalStore.mobileMenu ? 'overflow-y-hidden' : ''
    "
  >
    <header>
      <Navbar :navLinks="navLinks" @mobile-menu="showMobileMenu = true" />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <Foobar :footerLinks="footerLinks" class="py-4" />
    </footer>
    <MobileNavMenu :show="globalStore.mobileMenu" :navLinks="navLinks" />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Foobar from "@/components/Foobar.vue";
import MobileNavMenu from "@/components/Layouts/MobileNavLayout.vue";
import { ref } from "vue";

import { useWalletStore } from "@/stores/wallet";
import { useGlobalStore } from "@/stores/global";

const showMobileMenu = ref(false);

const walletStore = useWalletStore();
const globalStore = useGlobalStore();

const navLinks = ref({
  logoPath: "/",
  siteNav: [
    { path: "/about", name: "About us" },
    { path: "/faq", name: "FAQ" },
  ],
  walletBtns: [
    { path: "/wallet/create", name: "Create" },
    { path: "/wallet/access", name: "Access Wallet" },
  ],
});

const footerLinks = ref({
  firstcol: [
    { path: "/privacy", name: "Privacy" },
    { path: "/terms", name: "Terms" },
  ],
  secondcol: [{ path: "/team", name: "Team" }],
  thirdcol: [
    {
      path: "https://etherscan.io/address/0xD4F42C8b4F688876D79D2577e2990919d09Ad5De",
      name: "Privacy",
    },
    { path: "/terms", name: "Terms" },
  ],
});
</script>

<style>
body {
  @apply bg-slate-100 text-slate-800 dark:bg-gray-900 dark:text-slate-50;
}
</style>
