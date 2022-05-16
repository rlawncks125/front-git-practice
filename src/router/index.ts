import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/st1",
    name: "연습1",
    component: () => import("../views/퍼블연습/연습1.vue"),
  },
  {
    path: "/st2",
    name: "연습1",
    component: () => import("../views/퍼블연습/연습2.vue"),
  },
  {
    path: "/test1",
    component: () => import("../views/테스트/event_this.vue"),
  },
  {
    path: "/test2",
    component: () => import("../views/테스트/swiper-v6.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
