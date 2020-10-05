// import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import API from "@/api/service";
import router from "../router";

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
    async postLogin({}, loginData) {
      try {
        const response = await API.post("/login", loginData);
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.data.remember_token)
        );
        console.log(response.data.data.remember_token);
        // router.push({ name: "RegisterSuccess" });
      } catch (error) {
        return error.response.data.message;
      }
    }
  },
  modules: {}
});
