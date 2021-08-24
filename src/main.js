import { createApp } from "vue";
import Router from "./router";

import App from "./App.vue";

import "@/assets/css/index.scss";

createApp(App).use(Router).mount("#app");
