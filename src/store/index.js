// import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import API from "@/api/service";
import router from "vue-router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async postRegister({}, registerData) {
      try {
        const response = await API.post("/register", registerData);
        // router.push({ name: "RegisterSuccess" });
        // console.log(response);
      } catch (error) {
        // console.log(error.response.data.message);
        return error.response.data.message;
      }
    }
  },
  modules: {}
});
