import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue"
import NProgress from 'nprogress'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => { NProgress.start() })
router.afterEach(() => { NProgress.done() })

export default router;