import Vue from "vue";
import Vuex from "vuex";

import Authorization from "./authorization";
import LoginRegister from "./LoginRegister";
import UserProfile from "./userProfile";
import Water from "./water";
import Diet from "./diet";
import Weight from "./weight";
import Charts from "./charts";
// password
import Password from "./editPassword";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true
  },
  mutations: {
    isLoading(state, loadingState) {
      state.isLoading = loadingState;
    }
  },
  actions: {},
  getters: {
    getLoadingState(state) {
      return state.isLoading;
    }
  },
  modules: {
    Authorization,
    UserProfile,
    LoginRegister,
    Water,
    Diet,
    Weight,
    Charts,
    Password
  }
});
