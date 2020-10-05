<template>
  <div>
    <ChartNav></ChartNav>
    <router-view />
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

<style lang="scss" scoped></style>
