<template>
  <div class="chart-container">
    <DateController
      :datePeriodOfChart="$store.getters.datePeriodOfChart"
      @toPreviousWeek="
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
      <Message v-if="!$store.getters.sumWaterIntake.length" />
    </div>
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
                suggestedMax: this.$store.getters.yAxisMax_water,
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
      await this.$store.dispatch("fetchWaterIntakeInSearchedPeriod", {
        remember_token: localStorage.getItem("token"),
        user_id: this.$store.getters.userProfile.id,
        start_date: this.$store.getters.datePeriodOfChart.startDate
          .split("/")
          .join("-"),
        end_date: this.$store.getters.datePeriodOfChart.endDate
          .split("/")
          .join("-")
      });

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

::v-deep .message {
  position: absolute;
  top: 15px;
  right: 0;
  bottom: 0;
  left: 36px;
  margin: auto;
}
</style>
