<template>
  <div class="h-screen" :class="createWallet || showMobileMenu ? 'overflow-y-hidden' : ''">
    <header>
      <Navbar :navLinks="navLinks" @mobile-menu="showMobileMenu = true" />
    </header>
    <main>
      <RouterView @create-wallet="createWallet = true" @close-create-wallet="createWallet = false" />
    </main>
    <footer>
      <Foobar :footerLinks="footerLinks" class="py-4" />
    </footer>
    <teleport to="body">
      <MobileNavMenu :show="showMobileMenu" :navLinks="navLinks" @close-menu="showMobileMenu = false" />
    </teleport>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Foobar from "@/components/Foobar.vue";
import MobileNavMenu from "@/components/Layouts/MobileNavLayout.vue";

export default {
  components: {
    Navbar,
    Foobar,
    MobileNavMenu,
  },
  data() {
    return {
      createWallet: false,
      showMobileMenu: false,
      navLinks: {
        logoPath: "/",
        siteNav: [
          { path: "/about", name: "About us" },
          { path: "/faq", name: "FAQ" },
        ],
        walletBtns: [
          { path: "/wallet/create", name: "Create" },
          { path: "/wallet/access", name: "Access Wallet" },
        ],
      },
      footerLinks: {
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
      },
    };
  },
  computed: {
    // isMobile() {
    //   if (
    //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    //       navigator.userAgent
    //     )
    //   ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
  },
};
</script>

<style scoped>
</style>
