<template>
  <div class="chart-container">
    <DateController
      :datePeriodOfChart="$store.getters.datePeriodOfChart"
      @toPreviosWeek="
        $store.commit('previousWeek');
        fillData();
      "
      @toNextWeek="
        $store.commit('nextWeek');
        fillData();
      "
    ></DateController>
    <div class="chart">
      <Chart :height="310" :chart-data="chartdata" :options="options" />
      <span class="y-scalelabel">飲水量 (公升)</span>
    </div>
    <Message v-if="!$store.getters.sumWaterIntake.length" />
  </div>
</template>

<script>
import DateController from "@/components/charts/DateController";
import Chart from "@/components/charts/Chart";
import Message from "@/components/charts/Message";

export default {
  components: {
    DateController,
    Chart,
    Message
  },
  data() {
    return {
      chartdata: {
        labels: this.$store.getters.labelDatesOfChart,
        datasets: [
          {
            type: "bar",
            label: "飲水量",
            backgroundColor: "#407D60",
            data: this.$store.getters.waterIntakeInSearchedPeriod
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "black"
              },
              gridLines: {
                color: "#ccc",
                zeroLineColor: "black",
                offsetGridLines: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "black",
                padding: 6,
                min: 0
              },
              gridLines: {
                zeroLineColor: "#ccc"
              }
            }
          ]
        }
      }
    };
  },
  methods: {
    async fillData() {
      await this.$store.dispatch("fetchWaterIntakeInSearchedPeriod");
      this.chartdata = {
        labels: this.$store.getters.labelDatesOfChart,
        datasets: [
          {
            type: "bar",
            label: "飲水量",
            backgroundColor: "#407D60",
            data: this.$store.getters.waterIntakeInSearchedPeriod
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
}

.chart {
  position: relative;
  max-width: 800px;
  padding: 45px 10px 5px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 6px;
  .y-scalelabel {
    position: absolute;
    font-size: 12px;
    top: 31px;
    left: 48px;
  }
}
</style>
