import Vue from "vue";
import Vuex from "vuex";
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
  modules: {
    UserProfile,
    LoginRegister,
    Water,
    Diet,
    Weight,
    Charts,
    Password
  }
});
