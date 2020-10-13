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
      state.datePeriodOfChart.startDate = dayjs(
        state.datePeriodOfChart.startDate
      )
        .subtract(7, "day")
        .format("YYYY/MM/DD");

      state.datePeriodOfChart.endDate = dayjs(state.datePeriodOfChart.endDate)
        .subtract(7, "day")
        .format("YYYY/MM/DD");
    },
    nextWeek(state) {
      state.datePeriodOfChart.startDate = dayjs(
        state.datePeriodOfChart.startDate
      )
        .add(7, "day")
        .format("YYYY/MM/DD");

      state.datePeriodOfChart.endDate = dayjs(state.datePeriodOfChart.endDate)
        .add(7, "day")
        .format("YYYY/MM/DD");
    }
  },
  actions: {},
  getters: {
    datePeriodOfChart(state) {
      return state.datePeriodOfChart;
    }
  }
};
