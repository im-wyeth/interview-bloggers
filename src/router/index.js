import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/blogers",
  },
  {
    path: "/blogers",
    name: "Blogers",
    meta: {
      breadCrumbs: [
        { path: "/", name: "Home", text: "Главная" },
        { path: "/blogers", name: "Blogers", text: "Блогеры" },
      ],
    },
    component: () => import("@/views/Blogers.vue"),
  },
  {
    path: "/blogers/:id",
    name: "Bloger",
    meta: {
      breadCrumbs: [
        { path: "/", name: "Home", text: "Главная" },
        { path: "/blogers", name: "Blogers", text: "Блогеры" },
        { path: "/bloger", name: "Bloger", text: "1" },
      ],
    },
    component: () => import("@/views/Bloger.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
