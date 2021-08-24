import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/bloger:id",
    name: "Bloger",
    component: () => import("@/views/Bloger.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
