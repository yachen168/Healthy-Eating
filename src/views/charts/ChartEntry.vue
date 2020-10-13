<template>
  <div class="chart-entry-container">
    <DateControllar
      :datePeriodOfChart="$store.getters.datePeriodOfChart"
      @toPreviosWeek="$store.commit('previousWeek')"
      @nextWeek="$store.commit('nextWeek')"
    ></DateControllar>
    <ChartNav></ChartNav>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import ChartNav from "@/components/charts/ChartNav";
import DateControllar from "@/components/charts/DateControllar";

export default {
  components: {
    ChartNav,
    DateControllar
  }
};
</script>

<style lang="scss" scoped>
.chart-entry-container {
  padding: 34px 16px;
}
.date-controllar {
  margin-bottom: 25px;
}
</style>
