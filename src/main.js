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
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum, faBtc } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";

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
  faCheck,
  faCaretDown
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive("focus", VFocus);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
