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
    }
  },
  modules: {}
});
