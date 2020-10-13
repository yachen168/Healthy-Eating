import API from "../api/service";
export default {
  state: {
    account: "",
    newPassword: ""
  },
  mutations: {
    setAccount(state, account) {
      console.log("33333");
      console.log(account);
      state.account = account;
    },
    setNewPassword() {
      state.newPassword = newPassword;
    }
  },
  actions: {
    //   post Api 07
  },
  getters: {},
  modules: {}
};
