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
      <span class="y-scalelabel">體重(公斤)</span>
    </div>
    <Message v-if="isShowNoDataMessage" />
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
      isShowNoDataMessage: false,
      chartdata: {
        labels: this.$store.getters.labelDatesOfChart,
        datasets: [
          {
            type: "line",
            pointStyle: "rectRot",
            pointRadius: 5,
            pointHoverRadius: 8,
            label: "體重",
            backgroundColor: "transparent",
            pointBackgroundColor: "#407D60",
            pointBorderColor: "#407D60",
            borderColor: "#407D60",
            borderWidth: 1,
            lineTension: 0,
            data: this.$store.getters.weightsInSearchedPeriod
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
                max:
                  Math.max(...this.$store.getters.weightsInSearchedPeriod) + 1,
                min: Math.min(
                  this.$store.getters.weightsInSearchedPeriod.filter(
                    item => item
                  ) - 3
                ),
                stepSize: 1
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
    checkIsShowNoDataMessage() {
      this.isShowNoDataMessage = this.$store.getters.weightsInSearchedPeriod.every(
        item => item === null
      );
    },
    async fillData() {
      await this.$store.dispatch(
        "fetchAllWeights",
        this.$store.getters.userProfile.id
      );

      this.chartdata = {
        labels: this.$store.getters.labelDatesOfChart,
        datasets: [
          {
            type: "line",
            pointStyle: "rectRot",
            pointRadius: 5,
            pointHoverRadius: 8,
            label: "體重",
            backgroundColor: "transparent",
            pointBackgroundColor: "#407D60",
            pointBorderColor: "#407D60",
            borderColor: "#407D60",
            borderWidth: 1,
            lineTension: 0,
            data: this.$store.getters.weightsInSearchedPeriod
          }
        ]
      };

      this.checkIsShowNoDataMessage();
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
