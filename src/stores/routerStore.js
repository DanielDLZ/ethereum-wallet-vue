import { defineStore } from "pinia";

export const useRouterStore = defineStore({
  id: "router",
  state: () => ({
    routeParameters: JSON.stringify({ component: "asd" }),
  }),
  getters: {
    componentName: (state) => state.routeParameters,
  },
  actions: {
    exemp() {
      this.routeParameters = localStorage.getItem("router/parameters");
    },
  },
});
