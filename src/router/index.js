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
        path: "recording-states",
        name: "RecordingStates",
        component: () =>
          import(
            /* webpackChunkName: "recording-states" */ "@/views/recording/RecordingStates.vue"
          )
      },
      {
        path: "eating-record",
        name: "EatingRecord",
        component: () =>
          import(
            /* webpackChunkName: "eating-record" */ "@/views/recording/EatingRecord.vue"
          )
      },
      {
        path: "calendar",
        name: "Calendar",
        component: () =>
          import(
            /* webpackChunkName: "calender" */ "@/views/recording/Calendar.vue"
          )
      },
      {
        path: "user-info-view",
        name: "UserInfoView",
        component: () =>
          import(
            /* webpackChunkName: "user-info-view" */ "@/views/userInfo/UserInfoView.vue"
          )
      },
      {
        path: "user-info-edit",
        name: "UserInfoEdit",
        component: () =>
          import(
            /* webpackChunkName: "user-info-edit" */ "@/views/userInfo/UserInfoEdit.vue"
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
