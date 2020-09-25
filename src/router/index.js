import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "@/views/Register.vue")
  },
  /* ============================ recording ============================= */
  {
    path: "/recording",
    name: "Entry",
    redirect: "/recording/home",
    component: () =>
      import(
        /* webpackChunkName: "recording-entry" */ "@/views/recording/Entry.vue"
      ),
    children: [
      {
        path: "home",
        name: "Recording_Home",
        component: () =>
          import(
            /* webpackChunkName: "recording-home" */ "@/views/recording/Home.vue"
          )
      },
      {
        path: "eating-edit",
        name: "EatingEdit",
        component: () =>
          import(
            /* webpackChunkName: "eating-edit" */ "@/views/recording/EatingEdit.vue"
          )
      },
      {
        path: "calendar",
        name: "Calendar",
        component: () =>
          import(
            /* webpackChunkName: "calender" */ "@/views/recording/Calendar.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
