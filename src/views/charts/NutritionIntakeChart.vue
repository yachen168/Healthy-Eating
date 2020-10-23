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
      <span class="y-scalelabel">未攝取營養(份)</span>
      <Message v-if="isShowMessage" />
    </div>
    <section class="labels">
      <div
        class="label-wrapper"
        v-for="nutrition in chartdata.datasets"
        :key="nutrition.label"
      >
        <ChartLabel
          :title="nutrition.label"
          :type="nutrition.key"
          @click="filterData(nutrition.key)"
        />
      </div>
    </section>
  </div>
</template>

<script>
import DateController from "@/components/charts/DateController";
import Chart from "@/components/charts/Chart";
import Message from "@/components/charts/Message";
import ChartLabel from "@/components/charts/Label";

export default {
  components: {
    DateController,
    Chart,
    Message,
    ChartLabel
  },
  data() {
    return {
      isShowMessage: false,
      isShowBarData: {
        proteins: true,
        nuts: true,
        dairy: true,
        vegetables: true,
        grains: true,
        fruits: true
      },
      chartdata: {
        labels: this.$store.getters.labelDatesOfChart,
        datasets: [
          {
            type: "bar",
            label: "全穀雜糧類",
            key: "grains",
            backgroundColor: "#CBA368",
            data: this.$store.getters.dietaryDeficiency.grains
          },
          {
            type: "bar",
            label: "豆魚蛋肉類",
            key: "proteins",
            backgroundColor: "#E97979",
            data: this.$store.getters.dietaryDeficiency.proteins
          },
          {
            type: "bar",
            label: "奶品類",
            key: "dairy",
            backgroundColor: "#FFC52F",
            data: this.$store.getters.dietaryDeficiency.dairy
          },
          {
            type: "bar",
            label: "蔬菜類",
            key: "vegetables",
            backgroundColor: "#98D59B",
            data: this.$store.getters.dietaryDeficiency.vegetables
          },
          {
            type: "bar",
            label: "水果類",
            key: "fruits",
            backgroundColor: "#A171B3",
            data: this.$store.getters.dietaryDeficiency.fruits
          },
          {
            type: "bar",
            label: "油脂及堅果種子類",
            key: "nuts",
            backgroundColor: "#83A7DD",
            data: this.$store.getters.dietaryDeficiency.nuts
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
                max: this.$store.getters.yAxisMax_nutrition,
                min: 0,
                fontColor: "black"
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
            key: "grains",
            backgroundColor: "#CBA368",
            data: this.$store.getters.dietaryDeficiency.grains
          },
          {
            type: "bar",
            label: "豆魚蛋肉類",
            key: "proteins",
            backgroundColor: "#E97979",
            data: this.$store.getters.dietaryDeficiency.proteins
          },
          {
            type: "bar",
            label: "奶品類",
            key: "dairy",
            backgroundColor: "#FFC52F",
            data: this.$store.getters.dietaryDeficiency.dairy
          },
          {
            type: "bar",
            label: "蔬菜類",
            key: "vegetables",
            backgroundColor: "#98D59B",
            data: this.$store.getters.dietaryDeficiency.vegetables
          },
          {
            type: "bar",
            label: "水果類",
            key: "fruits",
            backgroundColor: "#A171B3",
            data: this.$store.getters.dietaryDeficiency.fruits
          },
          {
            type: "bar",
            label: "油脂及堅果種子類",
            key: "nuts",
            backgroundColor: "#83A7DD",
            data: this.$store.getters.dietaryDeficiency.nuts
          }
        ]
      };
      this.isShowBarData = this.resetIsShowBarData;
      this.checkIsShowMessage();
    },
    filterData(key) {
      this.isShowBarData = {
        ...this.isShowBarData,
        [key]: !this.isShowBarData[key]
      };

      this.chartdata = {
        labels: this.$store.getters.labelDatesOfChart,
        datasets: [
          {
            type: "bar",
            label: "全穀雜糧類",
            key: "grains",
            backgroundColor: "#CBA368",
            data: this.isShowBarData.grains
              ? this.$store.getters.dietaryDeficiency.grains
              : null
          },
          {
            type: "bar",
            label: "豆魚蛋肉類",
            key: "proteins",
            backgroundColor: "#E97979",
            data: this.isShowBarData.proteins
              ? this.$store.getters.dietaryDeficiency.proteins
              : null
          },
          {
            type: "bar",
            label: "奶品類",
            key: "dairy",
            backgroundColor: "#FFC52F",
            data: this.isShowBarData.dairy
              ? this.$store.getters.dietaryDeficiency.dairy
              : null
          },
          {
            type: "bar",
            label: "蔬菜類",
            key: "vegetables",
            backgroundColor: "#98D59B",
            data: this.isShowBarData.vegetables
              ? this.$store.getters.dietaryDeficiency.vegetables
              : null
          },
          {
            type: "bar",
            label: "水果類",
            key: "fruits",
            backgroundColor: "#A171B3",
            data: this.isShowBarData.fruits
              ? this.$store.getters.dietaryDeficiency.fruits
              : null
          },
          {
            type: "bar",
            label: "油脂及堅果種子類",
            key: "nuts",
            backgroundColor: "#83A7DD",
            data: this.isShowBarData.nuts
              ? this.$store.getters.dietaryDeficiency.nuts
              : null
          }
        ]
      };
    }
  },
  computed: {
    resetIsShowBarData() {
      return {
        proteins: true,
        nuts: true,
        dairy: true,
        vegetables: true,
        grains: true,
        fruits: true
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

.labels {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  .label-wrapper {
    flex: 0 0 50%;
    padding: 6px 5px;
  }
}

::v-deep .message {
  position: absolute;
  top: 12px;
  right: 0;
  bottom: 0;
  left: 43px;
  margin: auto;
}
</style>
