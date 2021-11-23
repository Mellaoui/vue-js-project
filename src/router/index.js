import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Datacapture from "../views/Datacapture";
import Parts from "../views/Parts.vue";
import Partfinder from "../views/Partfinder.vue";
import Delivery from "../views/Delivery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard,
  },
  {
    path: "/datacapture",
    name: "Datacapture",
    component: Datacapture,
  },
  {
    path: "/parts",
    name: "Parts",
    component: Parts,
  },
  {
    path: "/partfinder",
    name: "Partfinder",
    component: Partfinder,
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: Delivery,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
