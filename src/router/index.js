import { createRouter, createWebHistory } from "vue-router";
import defaultRoutes from "./defaultRoutes";
import walletRoutes from "./walletRoutes";
import { useWalletStore } from "@/stores/wallet";

const routes = [defaultRoutes, walletRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to) => {
  const walletStore = useWalletStore();
  if (to.meta.requiresAuth && !walletStore.isOpen) return "/";
});

export default router;
