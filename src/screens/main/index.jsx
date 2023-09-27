import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Header from "components/Header";
import MainContent from "components/MainContent";
import SliderComponent from "components/SideSlideBar/SideSlideBar";

const riskLevelLabels = [
  "Low",
  "Low-Moderate",
  "Moderate",
  "Moderate-High",
  "High",
];

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [xAxisStart, setXAxisStart] = useState(0);
  const [xAxisEnd, setXAxisEnd] = useState(0);

  const [initialAmount, setInitialAmount] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
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
  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  // investmentRiskLevel에 따라 annualSavings를 조정
  let adjustedAnnualSavings = Array.isArray(annualSavings)
    ? [...annualSavings]
    : [annualSavings]; // 배열로 변환

  switch (investmentRiskLevel) {
    case 0: // Low
      adjustedAnnualSavings = adjustedAnnualSavings.map(
        (value) => value * 1.05
      );
      break;
    case 1: // Low-Moderate
      adjustedAnnualSavings = adjustedAnnualSavings.map(
        (value) => value * 1.07
      );
      break;
    case 2: // Moderate
      adjustedAnnualSavings = adjustedAnnualSavings.map(
        (value) => value * 1.08
      );
      break;
    case 3: // Moderate-High
      adjustedAnnualSavings = adjustedAnnualSavings.map(
        (value) => value * 1.09
      );
      break;
    case 4: // High
      adjustedAnnualSavings = adjustedAnnualSavings.map((value) => value * 1.1);
      break;
    default:
      break;
  }

  const totalAmount =
    initialAmount +
    adjustedAnnualSavings.reduce((acc, val) => acc + val, 0) *
      (xAxisEnd - xAxisStart) *
      12;
  const formattedTotalAmount = totalAmount.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });

  const sliders = [
    {
      label: "현재 당신은 몇 살 입니까?",
      value: xAxisStart,
      onChange: handleXAxisStartChange,
      min: 18,
      max: 64, // xAxisEnd - 1
      step: 1,
      displayValue: `${xAxisStart} Age`,
    },
    {
      label: "은퇴",
      value: xAxisEnd,
      onChange: handleXAxisEndChange,
      min: 31, // xAxisStart + 1
      max: 80,
      step: 1,
      displayValue: `${xAxisEnd} Age`,
    },
    {
      label: "초기금액",
      value: initialAmount,
      onChange: handleInitialAmountChange,
      min: 0,
      max: 50000,
      step: 1,
      displayValue: `${initialAmount} USD`,
    },
    {
      label: "월납입금액",
      value: annualSavings,
      onChange: handleAnnualSavingsChange,
      min: 0,
      max: 30000, // xAxisEnd
      step: 1,
      displayValue: `${annualSavings} USD`,
    },
    {
      label: "목표금액",
      value: newLineValue,
      onChange: handleNewLineValueChange,
      min: 0,
      max: 1000000,
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
  let riskMultiplier;

  switch (investmentRiskLevel) {
    case 0:
      riskMultiplier = 1.05;
      break;
    case 1:
      riskMultiplier = 1.07;
      break;
    case 2:
      riskMultiplier = 1.08;
      break;
    case 3:
      riskMultiplier = 1.09;
      break;
    case 4:
      riskMultiplier = 1.1;
      break;
    default:
  }
  //230925 - 1


  const chartData = Array.from({ length: xAxisEnd + 1 }, (_, i) => {
    let currentAnnual = annualSavings;
    let currentSavings = (currentAnnual *= riskMultiplier);
    return initialAmount + currentSavings * (i - xAxisStart) * 12;
  });

  const secondChartData = chartData.map((value) => value / 2); // 새로운 Area 차트 데이터

  const lineData = Array.from({ length: xAxisEnd + 1 }, (_, i) => newLineValue);

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
              width: showSidebar ? "20%" : 350,
              minWidth: showSidebar ? 350 : 350,
              height: "100%",
              overflowY: "auto",
              backgroundColor: "#f7f7f7",
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",

                flexDirection: "column",
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
          newLineValue={newLineValue}
          formattedTotalAmount={formattedTotalAmount}
        ></MainContent>
      </Box>
    </Box>
  );
};

export default Main;
