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
      console.log(infoOfForgetPassword);
      state.infoOfForgetPassword = infoOfForgetPassword;
    }
  },
  actions: {
    //   post Api 07
    async resetPassword({}, data) {
      console.log(data);
      try {
        const response = await API.post("/forget", data);
        console.log(response.data);
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
