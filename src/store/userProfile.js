import API from "../api/service";
export default {
  state: {
    userProfile: {}
  },
  mutations: {
    userProfile(state, userProfile) {
      state.userProfile = userProfile;
    }
  },
  actions: {
    async fetchUserProfile({ commit }) {
      try {
        const response = await API.post("/info", {
          remember_token: localStorage.getItem("token")
        });
        commit("userProfile", response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async uploadAvatar({ dispatch }, data) {
      try {
        const response = await API.post("/uploadImageAPI", data, {
          headers: {
            "Content-Type": "image/png",
            Accept: "application/json"
          }
        });
        dispatch("fetchUserProfile");
      } catch (error) {
        console.log(error.response);
      }
    },
    async updateUserProfile({ dispatch }, data) {
      try {
        await API.post("/profile", data);
        dispatch("fetchUserProfile");
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    userProfile(state) {
      return state.userProfile;
    },
    userWeight(state) {
      return +state.userProfile.weight;
    },
    avatarUrl(state) {
      const domainURL = "https://k88d02.ml";
      return state.userProfile.image_path
        ? `${domainURL}${state.userProfile.image_path}`
        : "";
    },
    gender(state) {
      if (state.userProfile.gender === "female") {
        return "女";
      }
      if (state.userProfile.gender === "male") {
        return "男";
      }
      if (state.userProfile.gender === "others") {
        return "其他";
      }
    },
    dietaryStandard(state) {
      return state.userProfile.diet_standard;
    }
  }
};
