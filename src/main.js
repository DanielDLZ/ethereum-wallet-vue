import { createApp } from "vue";
import { createPinia } from "pinia";

// Fontawesome
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

// root element
import App from "./App.vue";

// router
import router from "./router";

// global component registration
import components from "@/components/UI";

// some css styles
import "./assets/main.css";
import "./index.css";

// custom directives
import VFocus from "@/directives/VFocus";

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

app.directive("focus", VFocus);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
