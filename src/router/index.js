import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/pages/Main.vue"),
  },
  {
    path: "/bloger:id",
    name: "Bloger",
    component: () => import("@/pages/Bloger.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
