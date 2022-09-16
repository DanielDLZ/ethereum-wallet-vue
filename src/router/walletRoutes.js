import WalletView from "@/views/WalletView.vue";
import WalletDashboardView from "@/views/walletViews/WalletDashboardView.vue";

export default {
  path: "/wallet/dashboard",
  name: "Wallet",
  component: WalletView,
  meta: { requiresAuth: true },
  props: true,
  children: [
    {
      path: "",
      name: "Dashboard",
      component: WalletDashboardView,
      meta: { requiresAuth: false },
    },
  ],
};
