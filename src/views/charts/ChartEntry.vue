<template>
  <div class="chart-entry-container">
    <DateController
      :datePeriodOfChart="$store.getters.datePeriodOfChart"
      @toPreviosWeek="$store.commit('previousWeek')"
      @toNextWeek="$store.commit('nextWeek')"
    ></DateController>
    <ChartNav></ChartNav>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import ChartNav from "@/components/charts/ChartNav";
import DateController from "@/components/charts/DateController";

export default {
  components: {
    ChartNav,
    DateController
  }
};
</script>

<style lang="scss" scoped>
.chart-entry-container {
  padding: 34px 16px;
}
</style>
