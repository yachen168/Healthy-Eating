import API from "../api/service";
export default {
  state: {},
  mutations: {},
  actions: {
    async fetchUserId() {
      const token = localStorage.getItem("token");
      try {
        const response = await API.post("/info", {
          remember_token: token
        });
        return response.data.data.id;
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {}
};
