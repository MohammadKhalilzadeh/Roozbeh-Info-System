import Vue from "vue";
import VueRouter from "vue-router";
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

import FQ120100 from "../files/FQ12-01-00.vue";
import FQ120200 from "../files/FQ12-02-00.vue";
import FQ120300 from "../files/FQ12-03-00.vue";
import FQ120500 from "../files/FQ12-05-00.vue";
import FQ120600 from "../files/FQ12-06-00.vue";
import FQ120700 from "../files/FQ12-07-00.vue";
import FQ120800 from "../files/FQ12-08-00.vue";
import FQ121100 from "../files/FQ12-11-00.vue";
import FQ121200 from "../files/FQ12-12-00.vue";
import FQ121300 from "../files/FQ12-13-00.vue";
import FQ121400 from "../files/FQ12-14-00.vue";
import FQ121500 from "../files/FQ12-15-00.vue";
import FQ121600 from "../files/FQ12-16-00.vue";
import FQ121800 from "../files/FQ12-18-00.vue";
import FQ122000 from "../files/FQ12-20-00.vue";

import FQ120400 from "../files/FQ12-04-00.vue";

import FQ120900 from "../files/FQ12-09-00.vue";
import FQ122300 from "../files/FQ12-23-00.vue";

import FQ122400 from "../files/FQ12-24-00.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
      // Clients View
      {
        path: "/director/clients",
        name: "MyClients",
        component: MyClients,
      },
      {
        path: "/director/clients/fq121300/:id",
        name: "fq121300",
        component: FQ121300,
        props: true,
      },
      {
        path: "/director/clients/fq121400/:id",
        name: "fq121400",
        component: FQ121400,
        props: true,
      },
      // Reports View
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
      // Madadkari Views
      {
        path: "/userpanel/madadkhari/fq120100/:id",
        name: "fq120100",
        component: FQ120100,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq120200/:id",
        name: "fq120200",
        component: FQ120200,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq120300/:id",
        name: "fq120300",
        component: FQ120300,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq120500/:id",
        name: "fq120500",
        component: FQ120500,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq120600/:id",
        name: "fq120600",
        component: FQ120600,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq120700/:id",
        name: "fq120700",
        component: FQ120700,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq120800/:id",
        name: "fq120800",
        component: FQ120800,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq121100/:id",
        name: "fq121100",
        component: FQ121100,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq121200/:id",
        name: "fq121200",
        component: FQ121200,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq121300/:id",
        name: "fq121300",
        component: FQ121300,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq121400/:id",
        name: "fq121400",
        component: FQ121400,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq121500/:id",
        name: "fq121500",
        component: FQ121500,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq121600/:id",
        name: "fq121600",
        component: FQ121600,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq121800/:id",
        name: "fq121800",
        component: FQ121800,
        props: true,
      },
      {
        path: "/userpanel/madadkhari/fq122000/:id",
        name: "fq122000",
        component: FQ122000,
        props: true,
      },
      // Counseling Views
      {
        path: "/userpanel/counseling",
        name: "Counseling",
        component: Counseling,
      },
      {
        path: "/userpanel/counseling/fq120400/:id",
        name: "fq120400",
        component: FQ120400,
        props: true,
      },
      // Health
      {
        path: "/userpanel/health",
        name: "Health",
        component: Health,
      },
      {
        path: "/userpanel/health/fq120900/:id",
        name: "fq120900",
        component: FQ120900,
        props: true,
      },
      {
        path: "/userpanel/health/fq122300/:id",
        name: "fq122300",
        component: FQ122300,
        props: true,
      },
      // Education Views
      {
        path: "/userpanel/education",
        name: "Education",
        component: Education,
      },
      {
        path: "/userpanel/education/fq122400/:id",
        name: "fq122400",
        component: FQ122400,
        props: true,
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
