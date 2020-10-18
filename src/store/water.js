import API from "../api/service";
import dayjs from "dayjs";
export default {
  state: {
    sumWaterIntake: [],
    allRecordingsOfWaterIntake: [],
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
    allRecordingsOfWaterIntake(state, allRecordingsOfWaterIntake) {
      state.allRecordingsOfWaterIntake = allRecordingsOfWaterIntake;
    },
    idOfWaterIntake(state, { data, date }) {
      state.idOfWaterIntake = data.find(
        item => item.created_at.split(" ")[0] === date
      ).id;
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

        commit("allRecordingsOfWaterIntake", response.data.data);
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
    },
    datesHaveBeenRecorded_water(state) {
      return state.sumWaterIntake.map(item => new Date(item.day));
    },
    waterIntakeInSearchedPeriod(state, getters, rootState, rootGetters) {
      if (state.sumWaterIntake.length === 0) {
        return new Array(7).fill(null).map(() => 0);
      } else {
        const datesInSearchedPeriod = rootGetters.datesInSearchedPeriod;
        const datesHaveBeenRecorded = state.sumWaterIntake.reduce(
          (obj, currentValue) => {
            obj[currentValue.day] = currentValue.sum;
            return obj;
          },
          {}
        );

        return datesInSearchedPeriod.map(item => {
          if (item in datesHaveBeenRecorded) {
            return datesHaveBeenRecorded[item];
          } else {
            return null;
          }
        });
      }
    }
  }
};
