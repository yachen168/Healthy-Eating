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
  {
    path: "/logged-in",
    name: "logged-in_Home",
    component: () =>
      import(
        /* webpackChunkName: "logged-in-home" */ "@/views/logged-in/Home.vue"
      )
  },
  {
    path: "/eating-edit",
    name: "EatingEdit",
    component: () =>
      import(
        /* webpackChunkName: "eating-edit" */ "@/views/logged-in/EatingEdit.vue"
      )
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () =>
      import(
        /* webpackChunkName: "calender" */ "@/views/logged-in/Calendar.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
