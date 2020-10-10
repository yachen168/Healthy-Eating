import Vue from "vue";
import Vuex from "vuex";
import LoginRegister from "./LoginRegister";
import UserProfile from "./userProfile";
import Water from "./water";
import Diet from "./diet";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    token(state, token) {
      state.token = token;
    }
  },
  actions: {
    fetchToken({ commit }) {
      const token = localStorage.getItem("token");
      commit("token", token);
    }
  },
  getters: {
    token(state) {
      return state.token;
    }
  },
  modules: {
    UserProfile,
    LoginRegister,
    Water,
    Diet
  }
});
