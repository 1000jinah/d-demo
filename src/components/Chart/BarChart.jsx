import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import BarChartTable from "components/BarChartTable";
import { fetchData } from "api/api";
import { Box, CircularProgress, Typography } from "@mui/material";

const BarChart = () => {
  const [chartData, setChartData] = useState([]);
  const [isChartReady, setIsChartReady] = useState(false);

  useEffect(() => {
    fetchData().then((data) => {
      // Sort the data by weight in descending order
      const sortedData = data.sort((a, b) => b.weights - a.weights);

      // Extract the top 10 items
      const top10Data = sortedData.slice(0, 10);

      const newChartData = top10Data.map((item) => ({
        ticker: item.port_id,
        name: item.stk_id,
        data: item.weights ? parseFloat(item.weights.replace(/"/g, "") * 1) : 0,
      }));

      setChartData(newChartData);
      console.log(newChartData, "Bar");
      setIsChartReady(true);
    });
  }, []);

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
        stacking: "normal",
      },
    },
    //     borderWidth: 20,
    //     pointWidth: 20, // Adjust the width of the series bars
    //     dataLabels: {
    //       enabled: true,
    //       format: "{point.y}%",
    //       x: -5,
    //       y: 25,
    //       align: "right",
    //     },
    //   },
    // },
    series: chartData.map((dataItem, index) => ({
      color: colorOptions[index % colorOptions.length],
      name: dataItem.ticker,
      data: [dataItem.data], // Wrap data in an array for stacking
    })),

    credits: {
      enabled: false,
    },
  };
  const seriesData = chartData.map((dataItem, index) => ({
    color: colorOptions[index % colorOptions.length],
    ticker: dataItem.ticker,
    name: dataItem.name,
    data: dataItem.data,
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
      {isChartReady ? (
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
          <BarChartTable seriesData={seriesData} />
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
          }}
        >
          <CircularProgress sx={{ mb: 3, color: "#ff754b" }} />
          <Typography>Loading...</Typography>
        </Box>
      )}{" "}
    </div>
  );
};

export default BarChart;
