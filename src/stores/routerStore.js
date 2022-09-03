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
    saveParam(parameter) {
      this.routeParameters = parameter;
    },
    showState() {
      console.log(this.routeParameters);
    },
  },
});
