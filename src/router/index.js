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
  {
    path: "/forgetPassword",
    name: "ForgetPassword",
    component: () =>
      import(
        /* webpackChunkName: "member-application" */ "@/views/member/ForgetPassword.vue"
      )
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
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "recording-states" */ "@/views/recording/RecordingStates.vue"
          )
      },
      {
        path: "diet-record/:dietType",
        name: "DietRecord",
        component: () =>
          import(
            /* webpackChunkName: "diet-record" */ "@/views/recording/DietRecord.vue"
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
        path: "user-profile-view",
        name: "UserProfileView",
        component: () =>
          import(
            /* webpackChunkName: "user-profile-view" */ "@/views/userProfile/UserProfileView.vue"
          )
      },
      {
        path: "user-profile-edit",
        name: "UserProfileEdit",
        component: () =>
          import(
            /* webpackChunkName: "user-profile-edit" */ "@/views/userProfile/UserProfileEdit.vue"
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
