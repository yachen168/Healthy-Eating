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
      <Chart :height="465" :chart-data="chartdata" :options="options" />
      <span class="y-scalelabel">未攝取營養(份)</span>
    </div>
    <Message v-if="false" />
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
        /* ====== 等待後端修改 API 資料====== */
        datasets: [
          {
            type: "bar",
            label: "全穀雜糧類",
            backgroundColor: "#CBA368",
            data: [1, 2, 4, 5, 2, 2, 2]
          },
          {
            type: "bar",
            label: "豆魚蛋肉類",
            backgroundColor: "#E97979",
            data: [0, 0, 1, 2, 4, 5, 0]
          },
          {
            type: "bar",
            label: "奶品類       ",
            backgroundColor: "#FFC52F",
            data: [5, 0, 2, 2, 2, 3, 0]
          },
          {
            type: "bar",
            label: "蔬菜類",
            backgroundColor: "#98D59B",
            data: [5, 1, 0, 3, 0, 2, 1]
          },
          {
            type: "bar",
            label: "水果類       ",
            backgroundColor: "#A171B3",
            data: [3, 0, 1, 4, 1, 1, 0]
          },
          {
            type: "bar",
            label: "油脂及堅果種子類",
            backgroundColor: "#83A7DD",
            data: [2, 4, 2, 3, 4, 0, 1]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
            boxWidth: 22,
            fontSize: 14,
            padding: 24,
            fontColor: "#383838"
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                fontColor: "black"
              },
              gridLines: {
                color: "#ccc",
                offsetGridLines: false
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              position: "left",
              ticks: {
                max: 40,
                min: 0,
                fontColor: "black",
                padding: 6
              },
              gridLines: {
                color: "#ccc",
                zeroLineColor: "#ccc"
              }
            }
          ]
        }
      }
    };
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
