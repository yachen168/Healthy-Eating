import API from "../api/service";
export default {
  state: {
    infoOfForgetPassword: {
      email: "",
      password: ""
    }
  },
  mutations: {
    updateInfoOfForgetPassword(state, infoOfForgetPassword) {
      state.infoOfForgetPassword = infoOfForgetPassword;
    }
  },
  actions: {
    //   post Api 07
    async resetPassword({}, data) {
      try {
        await API.post("/forget", data);
      } catch (error) {
        return error.response;
      }
    },
    async modifyPassword({}, data) {
      try {
        await API.post("/reset", data);
      } catch (error) {
        return error.response;
      }
    }
  },
  getters: {
    infoOfForgetPassword(state) {
      return state.infoOfForgetPassword;
    }
  },
  modules: {}
};
