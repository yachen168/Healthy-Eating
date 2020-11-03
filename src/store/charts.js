import dayjs from "dayjs";

export default {
  state: {
    datePeriodOfChart: {
      startDate: dayjs()
        .subtract(6, "day")
        .format("YYYY/MM/DD"),
      endDate: dayjs().format("YYYY/MM/DD")
    }
  },
  mutations: {
    previousWeek(state) {
      state.datePeriodOfChart = Object.keys(state.datePeriodOfChart).reduce(
        (obj, key) => {
          obj[key] = dayjs(state.datePeriodOfChart[key])
            .subtract(7, "day")
            .format("YYYY/MM/DD");
          return obj;
        },
        {}
      );
    },
    nextWeek(state) {
      state.datePeriodOfChart = Object.keys(state.datePeriodOfChart).reduce(
        (obj, key) => {
          obj[key] = dayjs(state.datePeriodOfChart[key])
            .add(7, "day")
            .format("YYYY/MM/DD");
          return obj;
        },
        {}
      );
    }
  },
  actions: {
    async fetchWaterIntakeInSearchedPeriod({ dispatch }, data) {
      await dispatch("fetchSumWaterIntake", data);
    }
  },
  getters: {
    datePeriodOfChart(state) {
      return state.datePeriodOfChart;
    },
    labelDatesOfChart(state) {
      return new Array(7).fill(null).map((item, index) => {
        return dayjs(state.datePeriodOfChart.startDate)
          .add(index, "days")
          .date();
      });
    },
    datesInSearchedPeriod(state) {
      return new Array(7).fill(null).map((item, index) => {
        return dayjs(state.datePeriodOfChart.startDate)
          .add(index, "days")
          .format("YYYY-MM-DD");
      });
    },
    yAxisMax_nutrition(state, getters, rootState, rootGetters) {
      const standardOfDiet = { ...rootGetters.userProfile.diet_standard };
      delete standardOfDiet.water;

      const nutrition =
        Object.values(standardOfDiet).reduce((acc, currentValue) => {
          acc += currentValue;
          return acc;
        }, 0) + 15;

      return nutrition;
    },
    yAxisMax_weight(state, getters, rootState, rootGetters) {
      const validData = rootGetters.weightsInSearchedPeriod.filter(
        item => item
      );

      return validData.length ? Math.max(...validData) + 1 : 50;
    },
    yAxisMin_weight(state, getters, rootState, rootGetters) {
      const validData = rootGetters.weightsInSearchedPeriod.filter(
        item => item
      );

      return validData.length ? Math.min(...validData) - 3 : 40;
    },
    yAxisMax_water(state, getters, rootState, rootGetters) {
      const validData = rootGetters.waterIntakeInSearchedPeriod.filter(
        item => item
      );

      return validData.length ? Math.max(...validData) + 1 : 50;
    }
  }
};
