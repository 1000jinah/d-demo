import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartComponent = () => {
  useEffect(() => {
    const revenueData = [0, 10000, 15000, 25000, 30000, 35000, 45000, 49500];
    const lineData = [0, 5000, 7500, 12500, 15000, 17500, 22500, 24750];

    const chartOptions = {
      chart: {
        type: "area",
        spacingTop: 10,
        marginTop: 120,
        inverted: false // Change to false to make the chart upright
      },

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 768 // 화면 너비가 768px 이하일 경우 적용
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
                y: 20
                // Adjust the x position to place it closer to the chart
              }
            }
          }
        ]
      },
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
      tooltip: {
        formatter: function () {
          return `<b>${this.series.name}: ${Highcharts.numberFormat(
            this.y,
            0,
            ",",
            ","
          )} USD</b>`;
        }
      },
      legend: {
        layout: "horizontal",
        align: "right",
        verticalAlign: "top",
        x: -10,
        y:20,
        floating: true,
        labelFormatter: function () {
          return this.visible ? this.name : this.name + " (no display)";
        }
      },
      xAxis: {
        crosshair: true,
        labels: {
          enabled: false // Hide the category labels on the x-axis
        }
      },
      yAxis: {
        crosshair: true,

        title: {
          text: null // Hide the default y-axis title
        }
      },
      plotOptions: {
        series: {
          pointStart: 2014,
          lineWidth: 4, // 변경된 부분
          marker: {
            symbol: "circle", // 변경된 부분
            radius: 4
          }
        },
        area: {
          marker: {
            enabled: false
          }
        }
      },

      series: [
        {
          name: "Expected_60% Chance",
          data: revenueData,
          color: "#ffcebf", // Set the background color for the area chart
          lineColor: "transparent",
          opacity: 1
        },
        {
          name: "Target",
          type: "area", // Change the chart type to area
          data: lineData,
          yAxis: 0, // Associate with the primary Y-axis (area chart)
          color: "transparent", // Line color
          lineColor: "#ff754b",
          lineWidth: 2
        }
      ],
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

      credits: {
        enabled: false // Hide the Highcharts credits
      }
    };

    Highcharts.chart("container", chartOptions);
  }, []);

  // Apply the custom CSS to remove the highcharts-tick
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

  return (
    <div id="container">
      <HighchartsReact highcharts={Highcharts} options={{}} />
    </div>
  );
};

export default ChartComponent;