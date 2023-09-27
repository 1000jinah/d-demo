import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ReactComponent as QuickIcon } from "assets/img/icon_quick.svg";
import { ReactComponent as ComprehensiveIcon } from "assets/img/icon_comprehensive.svg";

import { ReactComponent as RetirementIcon } from "assets/img/icon_retirement.svg";
import { ReactComponent as JustInvestmentIcon } from "assets/img/icon_justinvestment.svg";
import { ReactComponent as OwnHomeIcon } from "assets/img/icon_ownhome.svg";
import { ReactComponent as LowTaxProductIcon } from "assets/img/icon_lowtaxproduct.svg";
import { ReactComponent as GoalInvestIcon } from "assets/img/icon_goalinvest.svg";
import { ReactComponent as IncomeNeedIcon } from "assets/img/icon_incomeneeds.svg";
import { ReactComponent as ProfitIcon } from "assets/img/icon_profit.svg";
import { ReactComponent as ReactionIcon } from "assets/img/icon_reaction.svg";
import { ReactComponent as PortfolioIcon } from "assets/img/icon_portfolio.svg";
import { ReactComponent as SellEverythingIcon } from "assets/img/icon_selleverything.svg";
import { ReactComponent as SellSomeIcon } from "assets/img/icon_sellsome.svg";
import { ReactComponent as DoNothingIcon } from "assets/img/icon_donothing.svg";
import { ReactComponent as BuyMoreIcon } from "assets/img/icon_buymore.svg";

// import { ReactComponent as PreviousIcon } from "assets/img/icon_previous.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const Survey = () => {
  const surveyData = [
    {
      title: "Which way you want to choose?",
      subtitle: "Choose way to proceed goal investment.",
      goalChoose: [
        {
          title: "Quick",
          runTime: "2 min",
          icon: <QuickIcon />,
          article:
            "Uses estimates for income, savings, and expenses. You can always add and update your information later.",
        },
        {
          title: "Comprehensive",
          runTime: "8 min",
          icon: <ComprehensiveIcon />,
          article:
            "You can still estimate, but this allows you to input more information about your finances so your plan will be more accurate once you're done.",
        },
      ],
    },
    {
      title: "Your Goal",
      subtitle: "What is your primary goal for this investment?",
      goalChoose: [
        {
          title: "Retirement",
          startIcon: <RetirementIcon sx={{ width: 15, height: 15 }} />,
        },
        {
          title: "Own Home",
          startIcon: <OwnHomeIcon sx={{ width: 15, height: 15 }} />,
        },
        {
          title: "Goal Invest",
          startIcon: <GoalInvestIcon sx={{ width: 15, height: 15 }} />,
        },
        {
          title: "Just Investment",
          startIcon: <JustInvestmentIcon sx={{ width: 15, height: 15 }} />,
        },
        {
          title: "Low Tax Product",
          startIcon: <LowTaxProductIcon sx={{ width: 15, height: 15 }} />,
        },
      ],
    },
    {
      title: "Name Your Portfolio",
      subtitle:
        "75% of people who are financially secure build and manage a financial plan. We can help you build one that works for you.",
    },
    // Income Needs
    {
      title: "Income Needs",
      subtitle:
        "Your current need for income from your portfolio is an important factor in designing your portfolio. How much will you need to withdraw from your portfolio each year?",
      surveyImg: <IncomeNeedIcon sx={{ widht: 200, height: 200 }} />,
      goalChoose: [
        {
          title: "0%",
        },
        {
          title: "0% - 2%",
        },
        {
          title: "2% - 4%",
        },
        {
          title: "4% - 5%",
        },
        {
          title: "Higher than 5%",
        },
      ],
    },
    // Liquidity / Cash Needs
    {
      title: "Liquidity / Cash Needs",
      subtitle:
        "Beyond your income needs, will you need to make significant withdrawals from your portfolio within the next five years to fund major expenses (i.e. college funding, vacation home)? If yes, please indicate the estimated amount of withdrawals as a percentage of your portfolio:",
      surveyImg: null,
      goalChoose: [
        {
          title: "Less than 15%",
        },
        {
          title: "15% - 35%",
        },
        {
          title: "35% - 50%",
        },
        {
          title: "50% - 60%",
        },
        {
          title: "75% - 100%",
        },
      ],
    },
    // What level of profit do you expect?
    {
      title: "What level of profit do you expect?",
      subtitle: "Please check the appropriate items.",
      surveyImg: <ProfitIcon />,
      goalChoose: [
        {
          title: "Base ±10% range of principal",
        },
        {
          title: "Base ±20% range of principal",
        },
        {
          title: "Base ±50% range of principal",
        },
        {
          title: "Base ±100% range of principal",
        },
      ],
    },
    // Reaction to Financial Market Declines
    {
      title: "Reaction to Financial Market Declines",
      subtitle:
        "What has been your personal experience with financial market declines? Consider your feelings during the stereo market declines that occurred during the Great Recession when the S&P 500 Index lost more than 40% over a six-month period from September 1, 2008 through February 28, 2009. How did you (or would you have) reacted during that period?",
      surveyImg: <ReactionIcon />,
      goalChoose: [
        {
          title: "I sold / would have sold all of my stock investments.",
        },
        {
          title: "I sold / would have sold some of my stock investments.",
        },
        {
          title: "I made / would have made No changes to my stock investments.",
        },
        {
          title: "I increased / would have increased my stock investments.",
        },
      ],
    },
    // Reaction to Financial Market Declines
    {
      title: "Reaction to Financial Market Declines",
      subtitle:
        "Based on my past investment experience, I tend to sell stock investments and invest the money in safer assets during market declines.",
      surveyImg: null,
      goalChoose: [
        {
          title: "Strongly disagree",
        },
        {
          title: "Disagree",
        },
        {
          title: "Somewhat agree",
        },
        {
          title: "Agree",
        },
        {
          title: "Strongly agree",
        },
      ],
    },
    // Reaction to Fluctuation in Portfolio Values
    {
      title: "Reaction to Fluctuation in Portfolio Values",
      subtitle:
        "How would you react if you lost $50,000 on your $250,000 investment portfolio tomorrow? Please select the statement below that best reflects your reaction to the decline in investment value.",
      surveyImg: null,
      goalChoose: [
        {
          title:
            "I maintain a long-term focus on my investments and wouldn’t change my investment plan.",
        },
        {
          title:
            "I would be very concerned, but probably wouldn’t change my Investment plan.",
        },
        {
          title: "I’m not sure what I would do.",
        },
        {
          title: "I would probably make a change to my investment plan.",
        },
        {
          title: "I would definitely make a change to my investment plan.",
        },
      ],
    },
    // Reaction to Fluctuation in Portfolio Values
    {
      title: "Reaction to Fluctuation in Portfolio Values",
      subtitle:
        "Generally, I prefer a portfolio with little or no fluctuation in value, and I am willing to accept the lower potential returns associated with this type of portfolio.",
      surveyImg: <ComprehensiveIcon style={{ height: 130 }} />,
      goalChoose: [
        {
          title: "Strongly disagree",
        },
        {
          title: "Disagree",
        },
        {
          title: "Somewhat agree",
        },
        {
          title: "Agree",
        },
        {
          title: "Strongly agree",
        },
      ],
    },
    // International Investment Preference
    {
      title: "International Investment Preference",
      subtitle:
        "International investing can help increase your portfolio’s diversification as it enables you to spread risk across a variety of economies and financial markets. International investments include developed markets, such as France and Germany, with well-established companies and listing standards similar to the U.S. and also include more speculative emerging markets in countries with rapid but volatile economic growth. Which statement best reflects your view on international investing?",
      surveyImg: null,
      goalChoose: [
        {
          title: "I am very comfortable with international investments.",
        },
        {
          title: "I am comfortable with international investments.",
        },
        {
          title: "I am somewhat comfortable with international investments.",
        },
        {
          title: "I am somewhat uneasy with international investments.",
        },
        {
          title: "I am uneasy with international investments.",
        },
      ],
    },
    // Value Investment
    {
      title: "International Investment Preference",
      subtitle:
        "Historical data suggests the expected returns of value stocks are higher than those of growth stocks in both U.S and international markets because there are higher risks associated with investing in value stocks. While the stocks of value companies may be likely to outperform over the long term, such investments are also likely to underperform the market for certain periods of time. How comfortable are you with including value company investments in your portfolio?",
      surveyImg: null,
      goalChoose: [
        {
          title: "I am very comfortable with international investments.",
        },
        {
          title: "I am comfortable with international investments.",
        },
        {
          title: "I am somewhat comfortable with international investments.",
        },
        {
          title: "I am somewhat uneasy with international investments.",
        },
        {
          title: "I am uneasy with international investments.",
        },
      ],
    },
    // Small Company Investing
    {
      title: "Small Company Investing",
      subtitle:
        "Historical data suggests the expected returns of value stocks are higher than those of large company stocks are higher than those of large company stocks in both U.S. and international markets. However, there are higher risks associated with less established companies, and such investments may underperform the market for certain periods of time. How comfortable are you with including small company investments in your portfolio?",
      surveyImg: null,
      goalChoose: [
        {
          title: "I am very comfortable with international investments.",
        },
        {
          title: "I am comfortable with international investments.",
        },
        {
          title: "I am somewhat comfortable with international investments.",
        },
        {
          title: "I am somewhat uneasy with international investments.",
        },
        {
          title: "I am uneasy with international investments.",
        },
      ],
    },
    // Choose the investment portfolio you want
    {
      title: "Choose the investment portfolio you want",
      subtitle:
        "Imagine your investment of $1,000 becomes $750 over 3 months, but it's proven historically that it will recover in 3-5 years. What will you do?",
      surveyImg: <PortfolioIcon />,
      goalChoose: [
        {
          title: "Sell everything",
          startIcon: <SellSomeIcon />,
        },
        {
          title: "Sell some",
          startIcon: <SellEverythingIcon />,
        },
        {
          title: "Do nothing",
          startIcon: <DoNothingIcon />,
        },
        {
          title: "Buy More",
          startIcon: <BuyMoreIcon />,
        },
      ],
    },
    // Choose the investment portfolio you want
    {
      title: "Choose the investment portfolio you want",
      subtitle:
        "Imagine your investment of $1,000 becomes $750 over 3 months, but it's proven historically that it will recover in 3-5 years. What will you do?",
      surveyImg: null,
      goalChoose: [
        {
          title: "Low",
          startIcon: "",
        },
        {
          title: "Significantly Low",
          startIcon: "",
        },
        {
          title: "Middle",
          startIcon: "",
        },
        {
          title: "High",
          startIcon: "",
        },
        {
          title: "Significantly High",
          startIcon: "",
        },
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentData = surveyData[currentIndex];
  const [selectedValue, setSelectedValue] = useState("");
  const [resultData, setResultData] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const handleNext = () => {
    let canContinue = false;

    if (currentIndex === 0 && selectedItemIndex !== null) {
      canContinue = true;
      setSelectedValue(currentData); // Set selected value
      console.log(currentData.title, "When you choose THE FIRST BOXES");
    } else if (currentIndex === 1) {
      const radioName = `radio_${currentIndex}`;
      const selectedRadio = document.querySelector(
        `input[name="${radioName}"]:checked`
      );
      if (selectedRadio) {
        canContinue = true;
        setSelectedValue(selectedRadio.value); // Set selected value
      }
    } else if (currentIndex === 2 && inputValue.trim() !== "") {
      canContinue = true;
      setSelectedValue(inputValue); // Set selected value
    } else if (currentIndex >= 3) {
      const radioName = `radio_${currentIndex}`;
      const selectedRadio = document.querySelector(
        `input[name="${radioName}"]:checked`
      );
      if (selectedRadio) {
        canContinue = true;
        setSelectedValue(selectedRadio.value); // Set selected value
      }
    }

    if (canContinue) {
      const radioName = `radio_${currentIndex}`;
      const selectedRadio = document.querySelector(
        `input[name="${radioName}"]:checked`
      );
      const updatedResultData = [...resultData];
      console.log(updatedResultData, "updatedResultData");
      updatedResultData[currentIndex] = selectedValue;
      console.log(selectedValue, "updatedResultData[currentIndex]");
      setResultData(updatedResultData);
      setCurrentIndex(currentIndex + 1);
      setSelectedValue(currentData);
      setSelectedItemIndex(selectedRadio); // Reset selected item index

      // 새로운 부분: 설문 문항의 라디오 체크 유무 확인

      console.log(`Current Index: ${currentIndex}`);
      console.log(`Is Radio Checked: ${!!selectedRadio}`);
      console.log(`=====================================`);
      if (currentIndex === surveyData.length - 1) {
        // 모든 설문이 완료되었을 때, 로컬 스토리지에 데이터 저장
        localStorage.setItem(
          "survey-demo-result",
          JSON.stringify(updatedResultData)
        );
      }
    }
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
    setSelectedValue(index);
    if (currentIndex === 1 || currentIndex >= 3) {
      const radioName = `radio_${currentIndex}`;
      const radioElement = document.querySelector(
        `input[name="${radioName}"][value="${index}"]`
      );

      if (radioElement) {
        radioElement.checked = true;
        setSelectedValue(index.toString()); // Optionally, you can update selectedValue
      }
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSelectedValue(event.target.value);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fafafa",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{ fontSize: 40, color: "#000", fontWeight: "bold", mb: 3 }}
        >
          {currentData.title}
        </Typography>
        <Typography
          sx={{
            width: "75%",
            textAlign: "center",
            fontSize: 18,
            color: "#808080",
            mb: 3,
          }}
        >
          {currentData.subtitle}
        </Typography>
      </Box>
      <Box sx={{ height: "100%" }}>
        {currentIndex >= 3 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ my: 2 }}>{currentData.surveyImg}</Box>

            {currentData.goalChoose.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  onClick={() => {
                    handleItemClick(index);
                    handleChange({ target: { value: item.title } });
                  }}
                  sx={{
                    mb: 2.5,
                    cursor: "pointer",
                    border: "1px solid #211d1d",
                    display: "flex",
                    minWidth:
                      currentIndex === 6
                        ? 650
                        : currentIndex === 8
                        ? 800
                        : currentIndex === 10
                        ? 650
                        : currentIndex === 11
                        ? 650
                        : currentIndex === 12
                        ? 650
                        : 450,
                    width: "auto",
                    whiteSpace: "nowrap",
                    p: 1,
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {item.startIcon}
                    <Typography
                      sx={{
                        ml: 1,
                        color: "#000",
                        fontSize: 16,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <FormControlLabel
                    value={item.title}
                    control={
                      <Radio
                        checked={selectedValue === item.title}
                        value={item.title}
                        sx={{
                          "&.Mui-checked": { color: "#211d1d" },
                        }}
                        name={`radio_${currentIndex}`}
                      />
                    }
                  />
                </Box>
              </Box>
            ))}
          </Box>
        )}
        {currentIndex === 0 && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            {currentData.goalChoose.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 10,
                }}
                onClick={() => handleItemClick(index)}
              >
                <Box
                  sx={{
                    cursor: "pointer",
                    border:
                      selectedItemIndex === index
                        ? "2px solid #ff754b"
                        : "1px solid #211d1d",

                    boxSizing: "border-box",
                    minWidth: "50%",
                    display: "flex",
                    width: 440,
                    height: 440,
                    flexDirection: "column",
                    alignItems: "center",
                    mr: index === 0 ? 3 : 0,
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ mb: 3 }}>{item.icon}</Box>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: 22,
                      mb: 1,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14, mb: 1, color: "#ff754b" }}>
                    {item.runTime}
                  </Typography>
                  <Typography
                    sx={{
                      px: 1.15,
                      textAlign: "center",
                      color: "#808080",
                      lineHeight: "28px",
                    }}
                  >
                    {item.article}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}
        {currentIndex === 1 && (
          <Box
            sx={{
              width: 1000,
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {currentData.goalChoose.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  <Box
                    onClick={() => {
                      handleChange({ target: { value: item.title } });
                    }}
                    sx={{
                      mr: 4,
                      mb: 4,
                      cursor: "pointer",
                      border: "1px solid #211d1d",
                      display: "flex",
                      width: 300,
                      p: 1.5,
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {item.startIcon}
                      <Typography
                        sx={{
                          ml: 1,
                          color: "#000",
                          fontSize: 18,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <FormControlLabel
                      value={item.title}
                      control={
                        <Radio
                          checked={selectedValue === item.title}
                          value={item.title}
                          sx={{
                            "&.Mui-checked": { color: "#211d1d" },
                          }}
                          name={`radio_${currentIndex}`}
                        />
                      }
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
        {currentIndex === 2 && (
          <Box
            sx={{
              display: "flex",
              height: "100%",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              sx={{
                width: "100%",
                mb: 8,
                minWidth: 700,
                "& .MuiInput-root:after": {
                  borderBottom: " 2px solid #211d1d",
                },
              }}
              id="standard-basic"
              placeholder="Example: Sending our youngest to college"
              variant="standard"
              value={inputValue} // 수정된 부분
              onChange={handleInputChange} // Add this line
            />
          </Box>
        )}
      </Box>
      {/* Button */}
      <Box sx={{ position: "absolute", bottom: 60 }}>
        <Box sx={{ display: "flex" }}>
          {currentIndex > 0 && (
            <Button
              sx={{
                backgroundColor: "#ffffff",
                color: "#211d1d",
                textTransform: "capitalize",
                fontSize: 18,
                mr: 1.5,
                pr: 2,
                border: "2px solid #211d1d",
              }}
              onClick={handlePrevious}
              disabled={currentIndex <= 0}
            >
              <KeyboardArrowLeftIcon />
              Previous
            </Button>
          )}
          {currentIndex < surveyData.length - 1 && (
            <Button
              sx={{
                backgroundColor:
                  currentIndex === 0 && selectedItemIndex !== null
                    ? "#211d1d"
                    : currentIndex === 1 &&
                      document.querySelector(
                        `input[name="radio_${currentIndex}"]:checked`
                      )
                    ? "#211d1d"
                    : currentIndex === 2 && inputValue.trim() !== ""
                    ? "#211d1d"
                    : currentIndex >= 3 &&
                      document.querySelector(
                        `input[name="radio_${currentIndex}"]:checked`
                      )
                    ? "#211d1d"
                    : selectedItemIndex === null
                    ? "#808080"
                    : "#211d1d",

                color: "#ffffff",
                textTransform: "capitalize",
                fontSize: 18,
                minWidth: 400,
                borderRadius: "5px",
                ":hover": {
                  backgroundColor: "#211d1d",
                },
              }}
              onClick={handleNext}
            >
              Continue
              <KeyboardArrowRightIcon />
            </Button>
          )}
          {currentIndex === surveyData.length - 1 && (
            <Button
              sx={{
                backgroundColor: "#211d1d",
                minWidth: 400,
                textTransform: "capitalize",
                fontSize: 18,
                borderRadius: "5px",
                ":hover": {
                  backgroundColor: "#211d1d",
                },
              }}
              onClick={handleNext}
            >
              <Link
                to="/main"
                style={{
                  width: "100%",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                Submit
                <KeyboardArrowRightIcon />
              </Link>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Survey;
// const storedResultData = JSON.parse(localStorage.getItem("survey-demo-result"));
