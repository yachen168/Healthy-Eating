// import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import UserProfile from "./userProfile";
import Biology from "./biology";
import LoginRegister from "./LoginRegister";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserProfile,
    Biology,
    LoginRegister
  }
});
