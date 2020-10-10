import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import dayjs from "dayjs";
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
      },
      {
        path: "forget-password",
        name: "ForgetPassword",
        component: () =>
          import(
            /* webpackChunkName: "forget-password" */ "@/views/member/ForgetPassword.vue"
          )
      },
      {
        path: "reset-password",
        name: "ResetPassword",
        component: () =>
          import(
            /* webpackChunkName: "reset-password" */ "@/views/member/ResetPassword.vue"
          )
      },
      {
        path: "setting-weight",
        name: "SettingWeight",
        component: () =>
          import(
            /* webpackChunkName: "setting-weight" */ "@/views/member/SettingWeight.vue"
          ),
        meta: {
          requiredAuth: true
        }
      },
      {
        path: "password-success",
        name: "PasswordSuccess",
        component: () =>
          import(
            /* webpackChunkName: "password-success" */ "@/views/member/PasswordSuccess"
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
    beforeEnter: async (to, from, next) => {
      await store.dispatch("fetchUserProfile");
      await store.dispatch("fetchToken");
      next();
    },
    children: [
      {
        path: "states",
        name: "RecordingStates",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "recording-states" */ "@/views/recording/RecordingStates.vue"
          ),
        beforeEnter: async (to, from, next) => {
          const today = dayjs(new Date()).format("YYYY-MM-DD");
          const searchedDate = to.query.date ? to.query.date : today;
          await store.dispatch("fetchDietaryRecording", {
            user_id: store.getters.userProfile.id,
            kind: 0,
            start_date: searchedDate,
            end_date: searchedDate
          });
          await store.dispatch("fecthDietaryDeficiency", {
            user_id: store.getters.userProfile.id,
            start_date: searchedDate,
            end_date: searchedDate
          });
          next();
        }
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
          ),
        beforeEnter: async (to, from, next) => {
          const today = dayjs(new Date()).format("YYYY-MM-DD");
          const searchedDate = to.query.date ? to.query.date : today;
          await store.dispatch("fetchSumWaterIntake", {
            remember_token: store.getters.token,
            user_id: store.getters.userProfile.id,
            start_date: searchedDate,
            end_date: searchedDate
          });
          next();
        }
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
        // beforeEnter: async (to, from, next) => {
        //   await store.dispatch("fetchUserProfile");
        //   next();
        //   // console.log(to);
        // }
      },
      {
        path: "modify-password",
        name: "ModifyPassword",
        component: () =>
          import(
            /* webpackChunkName: "modify-password" */ "@/views/member/ModifyPassword.vue"
          )
      },
      {
        path: "chart",
        name: "ChartEntry",
        redirect: "/recording/chart/nutrition-intake",
        component: () =>
          import(
            /* webpackChunkName: "chart-enrty" */ "@/views/charts/ChartEntry.vue"
          ),
        children: [
          {
            path: "nutrition-intake",
            name: "NutritionIntakeChart",
            component: () =>
              import(
                /* webpackChunkName: "nutrition-intake-chart" */ "@/views/charts/NutritionIntakeChart.vue"
              )
          },
          {
            path: "water-intake",
            name: "WaterIntakeChart",
            component: () =>
              import(
                /* webpackChunkName: "water-intake-chart" */ "@/views/charts/WaterIntakeChart.vue"
              )
          },
          {
            path: "weight",
            name: "WeightsChart",
            component: () =>
              import(
                /* webpackChunkName: "weight-chart" */ "@/views/charts/WeightChart.vue"
              )
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("token") && to.meta.requiredAuth) {
    next({ name: "Login" });
    return;
  }
  next();
});

export default router;
