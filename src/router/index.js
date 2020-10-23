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
        beforeEnter: async (to, from, next) => {
          await store.dispatch("fetchUserProfile");
          next();
        },
        meta: {
          requiredAuth: true
        }
      },
      {
        path: "setting-plan",
        name: "SettingPlan",
        component: () =>
          import(
            /* webpackChunkName: "setting-plan" */ "@/views/member/SettingPlan.vue"
          ),
        beforeEnter: async (to, from, next) => {
          await store.dispatch("fetchUserProfile");
          next();
        }
      },
      {
        path: "password-success",
        name: "PasswordSuccess",
        component: () =>
          import(
            /* webpackChunkName: "password-success" */ "@/views/member/PasswordSuccess"
          ),
        beforeEnter: async (to, from, next) => {
          await store.dispatch("fetchUserProfile");
          next();
        }
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
      const today = dayjs().format("YYYY-MM-DD");
      const searchedDate = to.query.date ? to.query.date : today;

      await store.dispatch("fetchUserProfile");
      await store.dispatch("fetchDietaryRecording", {
        user_id: store.getters.userProfile.id,
        kind: 0,
        start_date: searchedDate,
        end_date: searchedDate
      });
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
          const today = dayjs().format("YYYY-MM-DD");
          const searchedDate = to.query.date ? to.query.date : today;

          // 待重構
          await store.dispatch("fetchDietaryDeficiency", {
            user_id: store.getters.userProfile.id,
            start_date: searchedDate,
            end_date: searchedDate
          });
          await store.dispatch("fetchSumWaterIntake", {
            remember_token: localStorage.getItem("token"),
            user_id: store.getters.userProfile.id,
            start_date: searchedDate,
            end_date: searchedDate
          });
          await store.dispatch("fetchAllWeights", store.getters.userProfile.id);
          await store.commit("weightOfSpecificDate", searchedDate);
          await store.commit("isWeightOfSpecificDateRecorded", searchedDate);
          next();
        }
      },
      {
        path: "diet-record/:dietType",
        name: "DietRecord",
        component: () =>
          import(
            /* webpackChunkName: "diet-record" */ "@/views/recording/DietRecord.vue"
          ),
        beforeEnter: async (to, from, next) => {
          const today = dayjs().format("YYYY-MM-DD");
          const searchedDate = to.query.date ? to.query.date : today;
          await store.commit("initHistoryOfAMealRecording", {
            dietType: to.params.dietType,
            searchedDate: searchedDate
          });
          next();
        }
      },
      {
        path: "weight-record",
        name: "WeightRecord",
        component: () =>
          import(
            /* webpackChunkName: "weight-record" */ "@/views/recording/WeightRecord.vue"
          ),
        beforeEnter: async (to, from, next) => {
          const today = dayjs().format("YYYY-MM-DD");
          const searchedDate = to.query.date ? to.query.date : today;
          const userId = store.getters.userProfile.id;

          await store.dispatch("fetchAllWeights", userId);
          await store.commit("weightOfSpecificDate", searchedDate);
          next();
        }
      },
      {
        path: "water-record",
        name: "WaterRecord",
        component: () =>
          import(
            /* webpackChunkName: "water-record" */ "@/views/recording/WaterRecord.vue"
          ),
        beforeEnter: async (to, from, next) => {
          const today = dayjs().format("YYYY-MM-DD");
          const searchedDate = to.query.date ? to.query.date : today;
          await store.dispatch("fetchSumWaterIntake", {
            remember_token: localStorage.getItem("token"),
            user_id: store.getters.userProfile.id,
            start_date: searchedDate,
            end_date: searchedDate
          });
          await store.dispatch("fetchUserAllRecordingsOfWaterIntake", {
            user_id: store.getters.userProfile.id,
            date: searchedDate
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
          ),
        beforeEnter: async (to, from, next) => {
          await store.dispatch("fetchSumWaterIntake", {
            remember_token: localStorage.getItem("token"),
            user_id: store.getters.userProfile.id
          });
          next();
        }
      },
      {
        path: "user-profile-view",
        name: "UserProfileView",
        component: () =>
          import(
            /* webpackChunkName: "user-profile-view" */ "@/views/userProfile/UserProfileView.vue"
          ),
        beforeEnter: async (to, from, next) => {
          await store.dispatch("fetchUserProfile");
          next();
        }
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
              ),
            beforeEnter: async (to, from, next) => {
              await store.dispatch("fetchDietaryDeficiency", {
                user_id: store.getters.userProfile.id,
                start_date: store.getters.datePeriodOfChart.startDate
                  .split("/")
                  .join("-"),
                end_date: store.getters.datePeriodOfChart.endDate
                  .split("/")
                  .join("-")
              });
              next();
            }
          },
          {
            path: "water-intake",
            name: "WaterIntakeChart",
            component: () =>
              import(
                /* webpackChunkName: "water-intake-chart" */ "@/views/charts/WaterIntakeChart.vue"
              ),
            beforeEnter: async (to, from, next) => {
              await store.dispatch("fetchSumWaterIntake", {
                remember_token: localStorage.getItem("token"),
                user_id: store.getters.userProfile.id,
                start_date: store.getters.datePeriodOfChart.startDate
                  .split("/")
                  .join("-"),
                end_date: store.getters.datePeriodOfChart.endDate
                  .split("/")
                  .join("-")
              });
              next();
            }
          },
          {
            path: "weight",
            name: "WeightsChart",
            component: () =>
              import(
                /* webpackChunkName: "weight-chart" */ "@/views/charts/WeightChart.vue"
              ),
            beforeEnter: async (to, from, next) => {
              await store.dispatch(
                "fetchAllWeights",
                store.getters.userProfile.id
              );
              next();
            }
          }
        ]
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    props: true,
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/404NotFound.vue")
  },
  {
    path: "*",
    name: "404NotFound",
    redirect: { name: 404 }
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
