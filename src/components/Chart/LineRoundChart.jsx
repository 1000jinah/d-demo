import React, { useEffect } from "react";
import Highcharts from "highcharts";

const LineRoundChart = ({
  chartData,
  secondChartData,
  lineData,
  xAxisStart,
  xAxisEnd,
  formattedTotalAmount, // 추가된 부분
}) => {
  useEffect(() => {
    const chart = Highcharts.chart("container", {
      subtitle: {
        text: "Expected Outcome",

        fontSize: 20,
        align: "left", // Center align the subtitle
        verticalAlign: "top", // Place the subtitle at the top
        y: 10, // Adjust vertical position if needed
        style: {
          fontSize: 16, // 변경된 부분
          fontWeight: "700", // 변경된 부분
          color: " #2d3142",
        },
      },
      title: {
        text: `$ ${formattedTotalAmount} USD`,
        align: "left", // Center align the title
        verticalAlign: "top", // Place the title at the bottom
        y: 55, // Adjust vertical position if needed
        style: {
          fontSize: 34, // 변경된 부분
          fontWeight: "normal", // 변경된 부분
          color: " #2d3142",
        },
      },
      xAxis: {
        min: xAxisStart,
        max: xAxisEnd,
        labels: {
          enabled: true, // Hide the category labels on the x-axis
          style: {
            color: "#b3b3b3",
          },
        },

        crosshair: true,
      },
      yAxis: {
        minorTickInterval: 0.1,
        min: 0,
        labels: {
          formatter: function () {
            return Highcharts.numberFormat(this.value, 0, "", ",");
          },
          style: {
            color: "#b3b3b3",
          },
        },
        title: false,
        crosshair: true,
      },
      legend: {
        layout: "horizontal",
        align: "right",
        verticalAlign: "top",
        symbol: {
          marker: "circle",
        },
        x: -10,

        floating: true,
        labelFormatter: function () {
          return this.visible ? this.name : this.name + " (no display)";
        },
      },

      series: [
        {
          type: "areaspline",
          name: "Expected_60% Chance",
          data: chartData, // Use the prop data for the chart
          color: "#ffcebf",
          marker: {
            enabled: false,
            radius: 4,
            lineWidth: 0.5,
            lineColor: "#211d1d",
            fillColor: "#fff",
            symbol: "circle",
          },
        },
        {
          type: "spline",
          name: "Target",
          lineWidth: 3,
          data: secondChartData, // Use the prop data for the chart
          color: "#ff754b",
          marker: {
            enabled: false,
            radius: 4,
            lineWidth: 0.5,
            lineColor: "#211d1d",
            fillColor: "#fff",
            symbol: "circle",
          },
        },
        {
          type: "spline",
          name: "My Goal Outcome",
          data: lineData,
          color: "green",
          marker: {
            enabled: false,
            radius: 4,
            lineWidth: 0.5,
            lineColor: "#211d1d",
            fillColor: "#fff",
            symbol: "circle",
          },
        },
      ],
      tooltip: {
        shared: true,
        pointFormat: "<span >{series.name}: <b>{point.y:,.0f}</b><br/>",
      },
      credits: {
        enabled: false, // Hide the Highcharts credits
      },
    });

    return () => {
      chart.destroy(); // Clean up the chart on component unmount
    };
  }, [chartData, secondChartData, lineData, xAxisStart, xAxisEnd]);
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
  return <div id="container"></div>;
};

export default LineRoundChart;
