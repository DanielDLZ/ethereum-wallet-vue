import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faXmark,
  faBars,
  faArrowRotateRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum, faBtc } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";

import components from "@/components/UI";

import "./assets/main.css";
import "./index.css";

library.add(
  faUserSecret,
  faEthereum,
  faBtc,
  faXmark,
  faBars,
  faArrowRotateRight,
  faCheck
);

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
