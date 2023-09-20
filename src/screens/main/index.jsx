import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "components/Header";
import MainContent from "components/MainContent";
import SliderComponent from "components/SideSlideBar/SideSlideBar";
const riskLevelLabels = [
  "No Risk",
  "Very Low",
  "Low",
  "Moderate",
  "High",
  "Very High",
];
const Main = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [xAxisStart, setXAxisStart] = useState(0);
  const [xAxisEnd, setXAxisEnd] = useState(0);
  const [initialAmount, setInitialAmount] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [newLineValue, setNewLineValue] = useState(0);
  const [investmentRiskLevel, setInvestmentRiskLevel] = useState(0);

  const handleXAxisStartChange = (event, newValue) => {
    setXAxisStart(newValue);
  };

  const handleXAxisEndChange = (event, newValue) => {
    setXAxisEnd(newValue);
  };

  const handleInitialAmountChange = (event, newValue) => {
    setInitialAmount(newValue);
  };

  const handleAnnualSavingsChange = (event, newValue) => {
    setAnnualSavings(newValue);
  };

  const handleNewLineValueChange = (event, newValue) => {
    setNewLineValue(newValue);
  };

  const handleInvestmentRiskLevelChange = (event, newValue) => {
    setInvestmentRiskLevel(newValue);
  };
  const sliders = [
    {
      label: "현재 당신은 몇 살 입니까?",
      value: xAxisStart,
      onChange: handleXAxisStartChange,
      min: 0,
      max: xAxisEnd - 1,
      step: 1,
      displayValue: `${xAxisStart} Age`,
    },
    {
      label: "은퇴",
      value: xAxisEnd,
      onChange: handleXAxisEndChange,
      min: xAxisStart + 1,
      max: 100,
      step: 1,
      displayValue: `${xAxisEnd} Age`,
    },
    {
      label: "초기금액",
      value: initialAmount,
      onChange: handleInitialAmountChange,
      min: 0,
      max: 100,
      step: 1,
      displayValue: `${initialAmount} USD`,
    },
    {
      label: "월납입금액",
      value: annualSavings,
      onChange: handleAnnualSavingsChange,
      min: 0,
      max: xAxisEnd,
      step: 1,
      displayValue: `${annualSavings} USD`,
    },
    {
      label: "목표금액",
      value: newLineValue,
      onChange: handleNewLineValueChange,
      min: 0,
      max: 100,
      step: 1,
      displayValue: `${newLineValue} USD`,
    },
    {
      label: "투자위험도레벨",
      value: investmentRiskLevel,
      onChange: handleInvestmentRiskLevelChange,
      min: 0,
      max: riskLevelLabels.length - 1,
      step: 1,
      displayValue: riskLevelLabels[investmentRiskLevel],
    },
  ];
  const sliderComponents = sliders.map((slider, index) => (
    <SliderComponent key={index} {...slider} />
  ));

  const chartData = Array.from(
    { length: xAxisEnd + 1 },
    (_, i) =>
      xAxisStart * ((sliderValue + initialAmount) / 100) +
      (i + xAxisStart) * (annualSavings / 100)
  );

  const secondChartData = chartData.map((value) => value / 2); // 새로운 Area 차트 데이터

  const lineData = Array.from({ length: xAxisEnd + 1 }, (_, i) => newLineValue);

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <Box sx={{ height: "100vh", overflow: "clip" }}>
      <Header toggleSideBar={toggleSideBar} onClick={toggleSideBar} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "clip",
        }}
      >
        {showSidebar && (
          <Box
            sx={{
              //   sideBarWidth={showSidebar ? "20%" : 350}
              // minSideBarWidth={showSidebar ? 350 : 350}
              width: showSidebar ? "20%" : 350,
              minWidth: showSidebar ? 350 : 350,
              height: "100%",
              backgroundColor: "#f7f7f7",
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",

                flexDirection: "column",
                // justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  borderBottom: "1px solid #e8e8e8",
                  fontWeight: "bold",
                  fontSize: 16,
                  m: 0,
                  pl: 3,
                  lineHeight: 3.6,
                  boxSizing: "border-box",
                  height: 56,
                }}
              >
                Goal Detail
              </Typography>
              <Box
                sx={{
                  px: 3,
                  height: "100%",

                  display: "flex",

                  flexDirection: "column",
                }}
              >
                {sliderComponents}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    borderRadius: 0,
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: 16,
                    minWidth: "100%",
                  }}
                >
                  Calculate
                </Button>
              </Box>
            </Box>
          </Box>
        )}

        <MainContent
          mainWidth={showSidebar ? "80%" : "100%"}
          chartData={chartData}
          secondChartData={secondChartData}
          lineData={lineData}
          xAxisStart={xAxisStart}
          xAxisEnd={xAxisEnd}
        ></MainContent>
      </Box>
    </Box>
  );
};

export default Main;
