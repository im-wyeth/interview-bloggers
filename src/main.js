import { createApp } from "vue";
import Router from "./router";
import Store from "./store";

import SubsMask from "@/directives/subsMask.directive.js";

import App from "./App.vue";

import "@/assets/css/index.scss";

const app = createApp(App)
  .use(Router)
  .use(Store);

app.directive("subsMask", SubsMask);

app.mount("#app");
