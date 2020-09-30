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
    path: "/member-application",
    name: "MemberApplication",
    redirect: "/member-application/login",
    component: () =>
      import(
        /* webpackChunkName: "member-application" */ "@/views/member/MemberApplication.vue"
      ),
    children: [
      {
        path: "login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/member/Login.vue")
      },
      {
        path: "register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "@/views/member/Register.vue"
          )
      },
      {
        path: "register-success",
        name: "RegisterSuccess",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "@/views/member/RegisterSuccess.vue"
          )
      }
    ]
  },

  /* ============================ recording ============================= */
  {
    path: "/recording",
    name: "Entry",
    redirect: "/recording/states",
    component: () =>
      import(
        /* webpackChunkName: "recording-entry" */ "@/views/recording/Entry.vue"
      ),
    children: [
      {
        path: "states",
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
        path: "weight-record",
        name: "WeightRecord",
        component: () =>
          import(
            /* webpackChunkName: "weight-record" */ "@/views/recording/WeightRecord.vue"
          )
      },
      {
        path: "water-record",
        name: "WaterRecord",
        component: () =>
          import(
            /* webpackChunkName: "water-record" */ "@/views/recording/WaterRecord.vue"
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
