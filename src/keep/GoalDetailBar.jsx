import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NonLinearSlider from "../components/SideSlideBar/SideSlideBar";

const SlideArray = [
  {
    title: "How old are you?",
    type: "Age",
  },
  {
    title: "At what age would you like to retire?",
    type: "Age",
  },
  {
    title:
      " how much monthly income will ",
    type: "USD",
  },
  {
    title: "sum towards retirement?",
    type: "USD",
  },
  {
    title: "monthly basis?",
    type: "USD",
  },
  {
    title: "Investment risk level",
    type: "Year",
  },
];

const GoalDetailBar = ({sideBarWidth, minSideBarWidth}) => {
  return (
    <Box
      sx={{
        width: sideBarWidth,
        minWidth: minSideBarWidth,
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
          {/* Loop through the SlideArray and render NonLinearSlider for each item */}
          {SlideArray.map((item, index) => (
            <NonLinearSlider
              key={index}
              dataIndex={index}
              SliderTitle={item.title}
              SliderType={item.type}
              sliderIndex={index}
            />
          ))}
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
  );
};

export default GoalDetailBar;
