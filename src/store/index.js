// import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import API from "@/api/service";
import router from "../router";
import UserProfile from "./userProfile";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async postRegister({}, registerData) {
      try {
        await API.post("/register", registerData);
        router.push({ name: "RegisterSuccess" });
      } catch (error) {
        return error.response.data.message;
      }
    },
    async postLogin({ dispatch }, loginData) {
      try {
        const response = await API.post("/login", loginData);
        const token = response.data.data.remember_token;
        localStorage.setItem("token", token);
        const weight = await dispatch("getUserInfo", token);
        if (weight === null) {
          setTimeout(() => {
            router.push({ name: "SettingWeight" });
          }, 500);
        } else {
          setTimeout(() => {
            router.push({ name: "Entry" });
          }, 500);
        }
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUserInfo({}, token) {
      try {
        const response = await API.post("/info", {
          remember_token: token
        });
        return response.data.data.weight;
      } catch (error) {
        setTimeout(() => {
          router.push({ name: "Login" });
        }, 500);
      }
    }
  },
  modules: {
    UserProfile
  }
});
