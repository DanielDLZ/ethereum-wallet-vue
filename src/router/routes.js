import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AnswersView from "../views/AnswersView.vue";
import CreateView from "../views/CreateView.vue";
import AccessView from "../views/AccessView.vue";
import DashboardView from "../views/DashboardView.vue";
import TermsView from "../views/TermsView.vue";
import TeamView from "../views/TeamView.vue";
import PrivacyView from "../views/PrivacyView.vue";
import CreateWalletLayout from "@/components/Layouts/CreateWalletLayout.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/wallet/create",
    name: "Create",
    component: CreateView,
  },
  {
    path: "/wallet/create/:type",
    name: "CreateWalletLayout",
    component: CreateWalletLayout,
  },
  {
    path: "/wallet/access",
    name: "Access",
    component: AccessView,
  },
  {
    path: "/wallet/dashboard",
    name: "Dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/faq",
    name: "Answers",
    component: AnswersView,
  },
  {
    path: "/terms",
    name: "Terms",
    component: TermsView,
  },
  {
    path: "/team",
    name: "Team",
    component: TeamView,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: PrivacyView,
  },
];
