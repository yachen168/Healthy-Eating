import API from "../api/service";
export default {
  state: {
    userProfile: {}
  },
  mutations: {
    UserInfo(state, userProfile) {
      state.userProfile = userProfile;
    },
    changeGender(state, getGender) {
      state.userProfile = { ...state.userProfile, gender: getGender };
    }
  },
  actions: {
    async fetchUserProfile({ commit }) {
      try {
        const response = await API.post("/info", {
          remember_token: localStorage.getItem("token")
        });
        commit("UserInfo", response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async postUserProfile({ commit, dispatch }, userInfo) {
      try {
        const token = localStorage.getItem("token");
        const userId = await dispatch("fetchUserId");
        await API.post("/bioProfile", {
          user_id: userId,
          ...userInfo
        }); // API_11_bioProfile_add
        dispatch("fetchUserProfile");
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    userProfile(state) {
      return state.userProfile; // format for table of BootstrapVue
    },
    avatarUrl(state) {
      const domainURL = "https://k88d02.ml";
      return state.userProfile.image_path
        ? `${domainURL}${state.userProfile.image_path}`
        : "";
    },
    translation(state) {
      if (state.userProfile.gender === "female") {
        return "女";
      }
      if (state.userProfile.gender === "male") {
        return "男";
      }
      if (state.userProfile.gender === "others") {
        return "其他";
      }
    }
  }
};
