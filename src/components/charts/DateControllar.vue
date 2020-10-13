<template>
  <div class="date-controllar">
    <PreviousIcon class="icon" @click="$emit('toPreviosWeek')" />
    <span class="period"
      >{{ datePeriodOfChart.startDate }}~{{ datePeriodOfChart.endDate }}</span
    >
    <NextIcon class="icon" @click="$emit('nextWeek')" />
  </div>
</template>

<script>
import PreviousIcon from "@/assets/images/ic_prev.svg?inline";
import NextIcon from "@/assets/images/ic_next.svg?inline";

export default {
  components: {
    PreviousIcon,
    NextIcon
  },
  props: {
    datePeriodOfChart: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.date-controllar {
  width: fit-content;
  margin: 0 auto;
  .period {
    margin: 0 16px;
    vertical-align: middle;
    font-size: 20px;
    color: #383838;
    font-weight: 700;
  }
  .icon {
    vertical-align: middle;
  }
}
</style>
