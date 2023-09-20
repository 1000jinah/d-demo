// ChartComponent.jsx
import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartComponent = ({
  chartData,
  secondChartData,
  lineData,
  xAxisStart,
  xAxisEnd
}) => {
  const options = {
    subtitle: {
      text: "Expected Outcome",

      fontSize: 20,
      align: "left", // Center align the subtitle
      verticalAlign: "top", // Place the subtitle at the top
      y: 10, // Adjust vertical position if needed
      style: {
        fontSize: 16, // 변경된 부분
        fontWeight: "700", // 변경된 부분
        color: " #2d3142"
      }
    },
    title: {
      text: "$ 48,000 USD",
      align: "left", // Center align the title
      verticalAlign: "top", // Place the title at the bottom
      y: 55, // Adjust vertical position if needed
      style: {
        fontSize: 34, // 변경된 부분
        fontWeight: "normal", // 변경된 부분
        color: " #2d3142"
      }
    },
    accessibility: {
      keyboardNavigation: {
        seriesNavigation: {
          mode: "serialize"
        }
      }
    },
    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
      symbol: {
        marker: "circle"
      },
      x: -10,
      y: 20,
      floating: true,
      labelFormatter: function () {
        return this.visible ? this.name : this.name + " (no display)";
      }
    },
    yAxis: [
      {
        labels: {
          formatter: function () {
            return Highcharts.numberFormat(this.value, 0, "", ",");
          },
          style: {
            color: "#b3b3b3"
          }
        },
        crosshair: true,
        title: false
      }
    ],
    plotOptions: {
      series: {
        marker: {
          symbol: "circle", // 변경된 부분
          radius: 4
        }
      },
      area: {
        marker: {
          enabled: false
        }
      },
      line: {
        marker: {
          enabled: false
        }
      }
    },
    xAxis: {
      min: xAxisStart + 1,
      max: xAxisEnd,
      labels: {
        enabled: false // Hide the category labels on the x-axis
      },

      crosshair: true
    },
    yAxis: [
      {
        labels: {
          formatter: function () {
            return Highcharts.numberFormat(this.value, 0, "", ",");
          },
          style: {
            color: "#b3b3b3"
          }
        },
        crosshair: true,
        title: false
      }
    ],
    series: [
      {
        type: "area",
        name: "Expected_60% Chance",
        data: chartData,
        color: "#ffcebf"
      },
      {
        type: "line",
        name: "Target",
        data: secondChartData,
        color: "#ff754b",
        lineWidth: 2
      },
      {
        type: "line",
        name: "My Goal Outcome",
        data: lineData,
        color: "green"
      }
    ],
    tooltip: {
      shared: true // tooltip을 공유하여 모든 series 값 표시
    },
    credits: {
      enabled: false // Hide the Highcharts credits
    }
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    .highcharts-area {
      fill-opacity: 1
    }
      .highcharts-tick { display: none; }
      .highcharts-point[fill="transparent"] { fill: #ff754b; }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartComponent;
