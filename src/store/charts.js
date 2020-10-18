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
    }
  }
};
