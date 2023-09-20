import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import { fetchClassData } from "api/api";
import { Box, CircularProgress, Typography } from "@mui/material";

const DoughtChart = () => {
  const [chartData, setChartData] = useState([]);
  const [isChartReady, setIsChartReady] = useState(false);

  useEffect(() => {
    fetchClassData().then((data) => {
      const classCounts = {
        liquidity: 0,
        fixedincome: 0,
        alternative: 0,
        equity: 0,
      };
      
      
      data.forEach((item) => {
        const { strg_asset_class } = item;
        if (classCounts.hasOwnProperty(strg_asset_class)) {
          classCounts[strg_asset_class]++;
        }
      });

      // Filter out classes with zero counts
      const newChartData = Object.keys(classCounts)
        .filter((className) => classCounts[className] > 0)
        .map((className) => ({
          name: className,
          y: classCounts[className],
        }));

      setChartData(newChartData);
      setIsChartReady(true);
    });
  }, []);

  useEffect(() => {
    if (isChartReady) {
      // Build the chart
      Highcharts.chart("container", {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        colors: ["#ff754b", "#b8dec3", "#f9e002", "#4bceff"],
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
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
            },
            showInLegend: true,
            // borderWidth: 0.8,
            // borderColor: "#000",
            innerSize: "60%",
          },
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: chartData,
          },
        ],
        legend: {
          align: "right",
          verticalAlign: "middle",
          layout: "vertical",
          itemMarginTop: 10,
          itemMarginBottom: 10,
          labelFormat: "{name}",
          itemStyle: {
            fontSize: "12px",
          },
        },
        credits: {
          enabled: false, // Disable Highcharts credits
        },
      });
    }
  }, [isChartReady]);
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    .highcharts-data-label-connector {
      stroke: #211d1d;
    }
    .highcharts-label {
      color: #211d1d;
    }

    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      {isChartReady ? (
        <div id="container"></div>
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

export default DoughtChart;
