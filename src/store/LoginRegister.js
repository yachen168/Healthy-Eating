import API from "../api/service";
import router from "../router";
export default {
  state: {},
  mutations: {},
  actions: {
    async postRegister({}, registerData) {
      try {
        await API.post("/register", registerData);
        router.push({ name: "RegisterSuccess" });
      } catch (error) {
        return error.response.data.message;
      }
    },
    async postLogin({ dispatch }, loginData) {
      try {
        const response = await API.post("/login", loginData);
        const token = response.data.data.remember_token;
        localStorage.setItem("token", token);
        const weight = await dispatch("getUserWeight", token);
        if (weight === null) {
          setTimeout(() => {
            router.push({ name: "SettingWeight" });
          }, 500);
        } else {
          setTimeout(() => {
            router.push({ name: "Entry" });
          }, 500);
        }
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUserWeight({}, token) {
      try {
        const response = await API.post("/info", {
          remember_token: token
        });
        return response.data.data.weight;
      } catch (error) {
        setTimeout(() => {
          router.push({ name: "Login" });
        }, 500);
      }
    }
  }
};
