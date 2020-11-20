import API from "../api/service";
export default {
  state: {},
  mutations: {},
  actions: {
    logout({}, data) {
      try {
        API.post("/logout", data);
      } catch (error) {
        return error.response;
      }
    }
  },
  getters: {}
};
