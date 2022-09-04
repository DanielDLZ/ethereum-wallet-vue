import { defineStore } from "pinia";

export const useRouterStore = defineStore({
  id: "asdasd",
  state: () => ({
    routeParameters: "qweq",
  }),
  getters: {
    componentName: (state) => state.routeParameters,
  },
  actions: {
    loadLocalStorage() {
      this.routeParameters = localStorage.getItem("router/parameters");
    },
    saveStateInLocalStorage(parameters) {
      localStorage.setItem("router/parameters", JSON.stringify(parameters));
    },
    saveParameters(parameter) {
      this.routeParameters = parameter;
    },
    showState() {
      console.log(this.routeParameters);
    },
  },
});
