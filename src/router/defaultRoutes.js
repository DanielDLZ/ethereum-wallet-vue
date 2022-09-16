import DefaultView from "@/views/DefaultView.vue";
import ErrorView from "@/views/ErrorView.vue";
import HomeView from "@/views/defaultViews/HomeView.vue";
import AboutView from "@/views/defaultViews/AboutView.vue";
import AnswersView from "@/views/defaultViews/AnswersView.vue";
import CreateView from "@/views/defaultViews/CreateView.vue";
import AccessView from "@/views/defaultViews/AccessView.vue";
import TermsView from "@/views/defaultViews/TermsView.vue";
import TeamView from "@/views/defaultViews/TeamView.vue";
import PrivacyView from "@/views/defaultViews/PrivacyView.vue";
import CreateWalletLayout from "@/layouts/CreateWalletLayout.vue";

import { TYPES_OF_CREATION } from "@/router/utils";

export default {
  path: "/",
  name: "DefaultView",
  component: DefaultView,
  meta: { requiresAuth: false },
  props: true,
  children: [
    {
      path: "",
      name: "Home",
      component: HomeView,
      meta: { requiresAuth: false },
    },
    {
      path: "about",
      name: "About",
      component: AboutView,
      meta: { requiresAuth: false },
    },
    {
      path: "wallet/create",
      name: "Create",
      component: CreateView,
      meta: { requiresAuth: false },
    },
    {
      path: "wallet/create/:type",
      name: "CreateWalletLayout",
      component: CreateWalletLayout,
      meta: { requiresAuth: false },
      beforeEnter: (to, from, next) => {
        if (TYPES_OF_CREATION.includes(to.params?.type)) {
          to.params = {
            ...to.params,
            ...{
              component: `Layer${
                to.params.type[0].toUpperCase() +
                to.params.type.slice(1, to.params.type.length)
              }`,
            },
          };
          next();
        } else {
          next("404");
        }
      },
    },
    {
      path: "wallet/access",
      name: "Access",
      component: AccessView,
      meta: { requiresAuth: false },
    },
    {
      path: "faq",
      name: "Answers",
      component: AnswersView,
      meta: { requiresAuth: false },
    },
    {
      path: "terms",
      name: "Terms",
      component: TermsView,
      meta: { requiresAuth: false },
    },
    {
      path: "team",
      name: "Team",
      component: TeamView,
      meta: { requiresAuth: false },
    },
    {
      path: "privacy",
      name: "Privacy",
      component: PrivacyView,
      meta: { requiresAuth: false },
    },
    {
      path: "404",
      name: "Error",
      component: ErrorView,
      meta: { requiresAuth: false },
    },
    {
      path: ":pathMatch(.*)",
      name: "Error",
      component: ErrorView,
      meta: { requiresAuth: false },
    },
  ],
};
