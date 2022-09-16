<template>
  <div>
    <MobileNavMenu v-if="globalStore.isMobileMenu" :navLinks="navLinks" />
    <header>
      <Navbar :navLinks="navLinks" />
    </header>
    <main class="w-full">
      <RouterView />
    </main>
    <footer>
      <Foobar :footerLinks="footerLinks" class="py-4" />
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Foobar from "@/components/Foobar.vue";
import MobileNavMenu from "@/layouts/MobileNavLayout.vue";
import { useGlobalStore } from "@/stores/global";

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
      name: "Donat",
    },
    { path: "/terms", name: "Terms" },
  ],
});
</script>

<style scoped></style>
