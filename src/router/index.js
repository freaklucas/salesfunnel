import Vue from "vue";
import VueRouter from "vue-router";
import Optin from "../views/Optin.vue";
import ThankYou from "../views/ThankYou.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Optin",
    component: Optin,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
