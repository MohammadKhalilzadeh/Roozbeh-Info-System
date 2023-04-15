import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyWidgets from "../views/My-Widgets.vue";
import Forms from "../views/All-Forms.vue";
import Modals from "../views/Modals.vue";
import Director from "../views/Director-Panel.vue";
import Login from "../views/Login.vue";

import Userpanel from "../views/Users-Panel.vue";
import Madadkari from "../views/Madadkari-Mngr.vue";
import Counseling from "../views/Counseling-Unit.vue";
import Health from "../views/Health-Unit.vue";
import Education from "../views/Education-Unit.vue";

import UserMng from "../views/User-Manage.vue";
import MyClients from "../views/My-Clients.vue";
import Reports from "../views/My-Reports.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/director",
    name: "Director",
    component: Director,
    children: [
      {
        path: "/director/usermng",
        name: "UserMng",
        component: UserMng,
      },
      {
        path: "/director/clients",
        name: "MyClients",
        component: MyClients,
      },
      {
        path: "/director/reports",
        name: "Reports",
        component: Reports,
      },
    ],
  },
  {
    path: "/userpanel",
    name: "Userpanel",
    component: Userpanel,
    children: [
      {
        path: "/userpanel/madadkhari",
        name: "Madadkari",
        component: Madadkari,
      },
      {
        path: "/userpanel/counseling",
        name: "Counseling",
        component: Counseling,
      },
      {
        path: "/userpanel/health",
        name: "Health",
        component: Health,
      },
      {
        path: "/userpanel/education",
        name: "Education",
        component: Education,
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    component: MyWidgets,
  },
  {
    path: "/allforms",
    name: "Allforms",
    component: Forms,
  },
  {
    path: "/modals",
    name: "modals",
    component: Modals,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
