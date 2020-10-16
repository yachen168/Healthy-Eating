import API from "../api/service";
export default {
  state: {},
  mutations: {},
  actions: {
    logout({}, data) {
      try {
        API.post("/logout", data);
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  getters: {}
};
