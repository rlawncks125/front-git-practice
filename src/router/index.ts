import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/st1",
    name: "연습1",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/퍼블연습/연습1.vue"),
  },
  {
    path: "/test1",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/테스트/event_this.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
