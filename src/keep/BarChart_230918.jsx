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
      // Create a dictionary to store the sum of weights for each port_id and stk_id combination
      const weightSumByPortAndStk = {};

      // Calculate the sum of weights for each port_id and stk_id
      data.forEach((item) => {
        const portId = item.port_id;
        const stkId = item.stk_id;
        const weight = parseFloat(item.weights) || 0;
        
        if (!weightSumByPortAndStk[portId]) {
          weightSumByPortAndStk[portId] = {};
        }

        if (!weightSumByPortAndStk[portId][stkId]) {
          weightSumByPortAndStk[portId][stkId] = weight;
        } else {
          weightSumByPortAndStk[portId][stkId] += weight;
        }
      });

      // Convert the dictionary into an array of objects
      const newChartData = [];

      Object.keys(weightSumByPortAndStk).forEach((portId) => {
        Object.entries(weightSumByPortAndStk[portId]).forEach(
          ([stkId, sum]) => {
            newChartData.push({
              ticker: portId,
              name: stkId,
              data: sum,
            });
          }
        );
      });

      // Calculate the total sum of data
      const totalSum = newChartData.reduce(
        (sum, dataItem) => sum + dataItem.data,
        0
      );

      // Calculate data percentages (as a fraction of 100) and round to 2 decimal places
      newChartData.forEach((dataItem) => {
        dataItem.data = ((dataItem.data / totalSum) * 100).toFixed(2);
      });

      setChartData(newChartData);
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
      categories: [""],
      visible: false,
    },
    yAxis: {
      labels: {
        format: "{value}%", // Display y-axis labels as percentages
      },
      visible: false,
      reversed: true,
      min: 0,
      max: 100, // Set the maximum value of the y-axis to 100%
      title: {
        text: null,
      },
    },
    legend: {
      enabled: false,
      useHTML: true,
      labelFormatter: function () {
        const percent = this.yData[0];
        const ticker = this.userOptions.ticker;
        const color = this.color;

        return `<div class="legend-table"><table style="width:100%"><tr><td style="color:${color}; font-size:22px;">&#9679;</td><td>${ticker}</td><td>${this.name}</td><td>${percent}%</td></tr></table></div>`;
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: chartData.map((dataItem, index) => ({
      color: colorOptions[index % colorOptions.length],
      name: dataItem.name,
      data: [parseFloat(dataItem.data)], // Wrap data in an array for stacking
    })),
    credits: {
      enabled: false,
    },
  };

  const seriesData = chartData.map((dataItem, index) => ({
    color: colorOptions[index % colorOptions.length],
    ticker: dataItem.ticker,
    name: dataItem.name,
    data: parseFloat(dataItem.data),
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
      )}
    </div>
  );
};

export default BarChart;
