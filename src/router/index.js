import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/bloggers",
  },
  {
    path: "/bloggers",
    name: "Bloggers",
    meta: {
      breadCrumbs: [
        { path: "/", name: "Home", text: "Главная" },
        { path: "/bloggers", name: "Bloggers", text: "Блогеры" },
      ],
    },
    component: () => import("@/views/Bloggers.vue"),
  },
  {
    path: "/bloggers/:id",
    name: "Blogger",
    meta: {
      breadCrumbs: [
        { path: "/", name: "Home", text: "Главная" },
        { path: "/bloggers", name: "Bloggers", text: "Блогеры" },
        { path: "/blogger", name: "Blogger", text: "1" },
      ],
    },
    component: () => import("@/views/Blogger.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
