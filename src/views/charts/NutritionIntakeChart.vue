<template>
  <div class="container">
    <div class="chart">
      <Chart :height="500" :chart-data="chartdata" :options="options" />
      <span class="y-scalelabel y-scalelabel-0">未攝取營養(份)</span>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/charts/Chart";

export default {
  components: {
    Chart
  },
  data() {
    return {
      chartdata: {
        labels: ["日", "一", "二", "三", "四", "五", "六"],
        datasets: [
          {
            type: "bar",
            label: "全穀雜糧類",
            id: "y-axis-0",
            backgroundColor: "#E88E07",
            data: [1, 2, 4, 5, 2, 2, 2]
          },
          {
            type: "bar",
            label: "豆魚蛋肉類",
            yAxisID: "y-axis-0",
            backgroundColor: "#E97979",
            data: [0, 0, 1, 2, 4, 5, 0]
          },
          {
            type: "bar",
            label: "奶品類",
            yAxisID: "y-axis-0",
            backgroundColor: "#F7E68E",
            data: [5, 0, 2, 2, 2, 3, 0]
          },
          {
            type: "bar",
            label: "蔬菜類",
            yAxisID: "y-axis-0",
            backgroundColor: "#9CC2B0",
            data: [5, 1, 0, 3, 0, 2, 1]
          },
          {
            type: "bar",
            label: "水果類",
            yAxisID: "y-axis-0",
            backgroundColor: "#A48ACE",
            data: [3, 0, 1, 4, 1, 1, 0]
          },
          {
            type: "bar",
            label: "油脂及堅果種子類",
            yAxisID: "y-axis-0",
            backgroundColor: "#4B7CC7",
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
            padding: 35,
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
                color: "#ccc"
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              position: "left",
              id: "y-axis-0",
              ticks: {
                max: 40,
                min: 0,
                fontColor: "black",
                padding: 8
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
.container {
  position: relative;
}

.chart {
  position: relative;
  max-width: 800px;
  padding: 25px 10px 10px;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 6px;
  .y-scalelabel {
    position: absolute;
    font-size: 12px;
    top: 12px;
    left: 48px;
  }
}
</style>
