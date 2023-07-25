import {
  createRouter,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/WoodenFish.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
