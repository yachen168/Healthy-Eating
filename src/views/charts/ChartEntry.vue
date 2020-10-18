<template>
  <div class="chart-entry-container">
    <ChartNav></ChartNav>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import ChartNav from "@/components/charts/ChartNav";

export default {
  components: {
    ChartNav
  }
};
</script>

<style lang="scss" scoped>
.chart-entry-container {
  padding: 34px 16px 120px;
}
</style>
