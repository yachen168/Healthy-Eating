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
      <Chart :height="465" :chart-data="chartdata" :options="options" />
      <span class="y-scalelabel">未攝取營養(份)</span>
    </div>
    <Message v-if="isShowMessage" />
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
      isShowMessage: false,
      chartdata: {
        labels: this.$store.getters.labelDatesOfChart,
        datasets: [
          {
            type: "bar",
            label: "全穀雜糧類",
            backgroundColor: "#CBA368",
            data: this.$store.getters.dietaryDeficiency.grains
          },
          {
            type: "bar",
            label: "豆魚蛋肉類",
            backgroundColor: "#E97979",
            data: this.$store.getters.dietaryDeficiency.proteins
          },
          {
            type: "bar",
            label: "奶品類       ",
            backgroundColor: "#FFC52F",
            data: this.$store.getters.dietaryDeficiency.dairy
          },
          {
            type: "bar",
            label: "蔬菜類",
            backgroundColor: "#98D59B",
            data: this.$store.getters.dietaryDeficiency.vegetables
          },
          {
            type: "bar",
            label: "水果類       ",
            backgroundColor: "#A171B3",
            data: this.$store.getters.dietaryDeficiency.fruits
          },
          {
            type: "bar",
            label: "油脂及堅果種子類",
            backgroundColor: "#83A7DD",
            data: this.$store.getters.dietaryDeficiency.nuts
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
            padding: 22,
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
              ticks: {
                stepSize: 8,
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
  },
  methods: {
    checkIsShowMessage() {
      this.isShowMessage = !Object.values(
        this.$store.getters.dietaryDeficiency
      ).find(item => item.find(item => item !== null));
    },
    async fillData() {
      await this.$store.dispatch("fetchDietaryDeficiency", {
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
            label: "全穀雜糧類",
            backgroundColor: "#CBA368",
            data: this.$store.getters.dietaryDeficiency.grains
          },
          {
            type: "bar",
            label: "豆魚蛋肉類",
            backgroundColor: "#E97979",
            data: this.$store.getters.dietaryDeficiency.proteins
          },
          {
            type: "bar",
            label: "奶品類       ",
            backgroundColor: "#FFC52F",
            data: this.$store.getters.dietaryDeficiency.dairy
          },
          {
            type: "bar",
            label: "蔬菜類",
            backgroundColor: "#98D59B",
            data: this.$store.getters.dietaryDeficiency.vegetables
          },
          {
            type: "bar",
            label: "水果類       ",
            backgroundColor: "#A171B3",
            data: this.$store.getters.dietaryDeficiency.fruits
          },
          {
            type: "bar",
            label: "油脂及堅果種子類",
            backgroundColor: "#83A7DD",
            data: this.$store.getters.dietaryDeficiency.nuts
          }
        ]
      };
      this.checkIsShowMessage();
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
