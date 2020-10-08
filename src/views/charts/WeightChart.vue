<template>
  <div class="container">
    <div class="chart">
      <Chart :height="400" :chart-data="chartdata" :options="options" />
      <span class="y-scalelabel y-scalelabel-0">體重(公斤)</span>
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
            type: "line",
            pointStyle: "rectRot",
            pointRadius: 5,
            pointHoverRadius: 8,
            label: "體重",
            yAxisID: "y-axis-0",
            backgroundColor: "transparent",
            pointBackgroundColor: "#407D60",
            pointBorderColor: "#407D60",
            borderColor: "#407D60",
            borderWidth: 1,
            data: [50.2, 50.8, 51.6, 51, 51.4, 51, 50.6]
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
                padding: 8,
                callback: function(value, index, values) {
                  return `${value} 份`;
                }
              },
              gridLines: {
                color: "#ccc",
                zeroLineColor: "#ccc"
              }
            },
            {
              id: "y-axis-0",
              ticks: {
                max: 55,
                min: 45,
                fontColor: "black",
                padding: 8
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
