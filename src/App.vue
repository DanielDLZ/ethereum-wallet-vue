<template>
  <div
    class="h-screen"
    :class="walletCreation || showMobileMenu ? 'overflow-y-hidden' : ''"
  >
    <header>
      <Navbar :navLinks="navLinks" @mobile-menu="showMobileMenu = true" />
    </header>
    <main>
      <RouterView
        @create-wallet="walletCreation = true"
        @close-create-wallet="walletCreation = false"
      />
    </main>
    <footer>
      <Foobar :footerLinks="footerLinks" class="py-4" />
    </footer>
    <MobileNavMenu
      :show="showMobileMenu"
      :navLinks="navLinks"
      @close-menu="showMobileMenu = false"
    />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Foobar from "@/components/Foobar.vue";
import MobileNavMenu from "@/components/Layouts/MobileNavLayout.vue";
import { ref } from "vue";

const walletCreation = ref(false);
const showMobileMenu = ref(false);

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
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-slate-100 text-slate-800 dark:bg-gray-900 dark:text-slate-50;
}
</style>
