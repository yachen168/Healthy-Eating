import API from "../api/service";
export default {
  state: {
    userProfile: {}
  },
  mutations: {
    setUserInfo(state, userProfile) {
      state.userProfile = userProfile;
    }
  },
  actions: {
    async fetchUserProfile({ commit }) {
      try {
        const response = await API.post("/info", {
          remember_token: localStorage.getItem("token")
        });
        commit("setUserInfo", response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    userProfile(state) {
      return [state.userProfile]; // format for table of BootstrapVue
    }
  }
};
