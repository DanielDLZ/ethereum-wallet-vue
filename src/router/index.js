import { createRouter, createWebHistory } from "vue-router";
import routesDefault from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesDefault,
});

export default router;
