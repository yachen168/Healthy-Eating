import API from "../api/service";
export default {
  state: {
    sumWaterIntake: [],
    idOfWaterIntake: [],
    sumWaterIntakeOneDay: 0,
    initSumWaterIntakeOneDay: 0
  },
  mutations: {
    sumWaterIntake(state, sumWaterIntake) {
      state.sumWaterIntake = sumWaterIntake;
    },
    initSumWaterIntakeOneDay(state) {
      if (state.sumWaterIntake.length) {
        state.sumWaterIntakeOneDay = +state.sumWaterIntake[0].sum;
      } else {
        state.sumWaterIntakeOneDay = 0;
      }
    },
    idOfWaterIntake(state, { data, date }) {
      console.log("id:");
      state.idOfWaterIntake = data.find(
        item => item.created_at.split(" ")[0] === date
      ).id;
      console.log(state.idOfWaterIntake);
    },
    updateSumWaterIntakeOneDay(state, num) {
      state.sumWaterIntakeOneDay += num;
    }
  },
  actions: {
    async fetchSumWaterIntake({ commit }, data) {
      try {
        const response = await API.post("/water/sum", data);
        commit("sumWaterIntake", response.data.data);
        commit("initSumWaterIntakeOneDay");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchUserAllRecordingsOfWaterIntake({ commit }, { user_id, date }) {
      try {
        const response = await API.get(`/water/${user_id}`);
        commit("idOfWaterIntake", { data: response.data.data, date });
      } catch (error) {
        console.log(error.response);
      }
    },
    async addNewWaterIntake({}, data) {
      try {
        await API.post("/userWater", data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async updateWaterIntake({}, { water_id, data }) {
      console.log(water_id);
      console.log(data);
      try {
        await API.post(`/userWater/${water_id}`, data);
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
      return state.sumWaterIntakeOneDay;
    },
    idOfWaterIntake(state) {
      return state.idOfWaterIntake;
    }
  }
};
