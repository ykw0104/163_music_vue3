import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/listview",
    name: "ListView",
    component: () =>
      import(/* webpackChunkName: "listview" */ "../views/ListView.vue"),
  },
  {
    path: "/searchview",
    name: "Searchview",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
