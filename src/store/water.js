import API from "../api/service";
export default {
  state: {
    sumWaterIntake: []
  },
  mutations: {
    sumWaterIntake(state, sumWaterIntake) {
      state.sumWaterIntake = sumWaterIntake;
    }
  },
  actions: {
    async fetchSumWaterIntake({ commit }, data) {
      try {
        const response = await API.post("/water/sum", data);
        commit("sumWaterIntake", response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async updateSumWaterIntake({ dispatch }, data) {
      try {
        await API.post("/userWater", data);
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  getters: {
    sumWaterIntake(state) {
      return state.sumWaterIntake;
    },
    sumWaterIntakeOneDay(state) {
      return state.sumWaterIntake.length ? +state.sumWaterIntake[0].sum : 0;
    }
  }
};
