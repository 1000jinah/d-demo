import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DoughtChart = () => {
  useEffect(() => {
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
          borderWidth: 0.8,
          borderColor: "#000",
          innerSize: "60%",
        },
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: [
            {
              name: "Chrome",
              y: 74.77,
            },
            {
              name: "Edge",
              y: 12.82,
            },
            {
              name: "Firefox",
              y: 4.63,
            },
            {
              name: "Safari",
              y: 2.44,
            },
          ],
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
  }, []);
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

  return <div id="container"></div>;
};

export default DoughtChart;
