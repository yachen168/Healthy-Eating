<template>
  <div class="chart-nav">
    <router-link class="chart-nav-item" :to="{ name: 'NutritionIntakeChart' }">
      <mealIcon class="nav-icon"></mealIcon>
      <h2>未攝取份數</h2>
    </router-link>
    <router-link class="chart-nav-item" :to="{ name: 'WaterIntakeChart' }">
      <waterIcon class="nav-icon"></waterIcon>
      <h2>飲水量</h2>
    </router-link>
    <router-link class="chart-nav-item" :to="{ name: 'WeightsChart' }">
      <weightIcon class="nav-icon"></weightIcon>
      <h2>體重變化</h2>
    </router-link>
  </div>
</template>

<script>
import mealIcon from "@/assets/images/tab_ic_meal.svg?inline";
import waterIcon from "@/assets/images/tab_ic_water.svg?inline";
import weightIcon from "@/assets/images/tab_ic_weight.svg?inline";
export default {
  name: "ChartNav",
  components: {
    mealIcon,
    waterIcon,
    weightIcon
  }
};
</script>

<style lang="scss" scoped>
.chart-nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 330px;
  left: 0;
  right: 0;
  bottom: 15px;
  margin: 0 auto;
  padding: 4px 32px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  z-index: 5; // over the charts
  &-item {
    cursor: pointer;
    text-align: center;
    h2 {
      margin-top: 10px;
      font-size: 13px;
      color: #9cc2b0;
    }
  }
  &-item.router-link-exact-active {
    text-decoration: none;
    .nav-icon,
    h2 {
      color: #407d60;
      path {
        fill: currentColor;
      }
    }
  }
}
</style>
