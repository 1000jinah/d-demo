import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import BarChartTable from "components/BarChartTable";

const BarChart = () => {
    const colorOptions = ["#ff754b", "#b8dec3", "#f9e002", "#4bceff"];

    // Set the colors for the entire chart using Highcharts.setOptions
    Highcharts.setOptions({
      colors: colorOptions,
    });

  const options = {
    chart: {
      type: "bar",
    },
    subtitle: {
      text: "Expected Outcome",
      fontSize: 20,
      align: "left",
      verticalAlign: "top",
      y: 10,
      style: {
        fontSize: 16,
        fontWeight: "700",
        color: " #2d3142",
      },
    },
    title: {
      text: "$ 48,000 USD",
      align: "left",
      verticalAlign: "top",
      y: 55,
      style: {
        fontSize: 34,
        fontWeight: "normal",
        color: " #2d3142",
      },
    },
    xAxis: {
      categories: ["Honey composition"],
      visible: false,
    },
    yAxis: {
      labels: {
        enabled: false,
      },
      visible: false,
      reversed: true,
      min: 0,
      title: {
        text: null,
      },
    },
    legend: {
      enabled: false,
      useHTML: true,
      labelFormatter: function () {
        // const pointData = this.yData[0];
        const percent = Highcharts.numberFormat(this.yData[0], 1);
        const ticker = this.userOptions.ticker;
        const percentSymbol = String.fromCharCode(37); // Unicode value for the percentage symbol
        const color = this.color;

        return `<div class="legend-table"><table style="width:100%"><tr><td style="color:${color}; font-size:22px;">&#9679;</td><td>${ticker}</td><td>${this.name}</td><td>${percent}${percentSymbol}</td></tr></table></div>`;
      },
    },
    plotOptions: {
      series: {
        stacking: "percent",
        borderWidth: 20,
        pointWidth: 20, // Adjust the width of the series bars
        dataLabels: {
          enabled: true,
          format: "{point.y}%",
          x: -5,
          y: 25,
          align: "right",
        },
      },
    },
    series: [
      { ticker: "VIG", name: "Vanguard Dividend Appreciation", data: [35] },
      { ticker: "VIG", name: "Vanguard Dividend Appreciation", data: [25] },
      { ticker: "VIG", name: "Vanguard Dividend Appreciation", data: [15] },
      { ticker: "VIG", name: "Vanguard Dividend Appreciation", data: [13] },
    ],

    credits: {
      enabled: false,
    },
  };
  const seriesData = options.series.map((seriesItem, index) => ({
    color: colorOptions[index % colorOptions.length],
    ticker: seriesItem.ticker,
    name: seriesItem.name,
    data: seriesItem.data[0],
  }));

  // Apply the custom CSS to remove the highcharts-tick
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    .highcharts-legend-item>.highcharts-point { fill: transparent; }
    .legend-table{ width:100%; border-bottom: 1px solid #eee; margin-top:-8px;}
    .highcharts-plot-background, .highcharts-plot-border{ height: 100px;}
    .highcharts-container {height:250px !important;}`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <BarChartTable seriesData={seriesData} />
    </div>
  );
};

export default BarChart;
