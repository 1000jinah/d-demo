import * as React from "react";
import FlexBetween from "components/FlexBetween";
import PropTypes from "prop-types";
import { Box, Slider, Typography, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const marksArray1 = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
  },
];

const marksArray2 = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
  },
];

const marksArray3 = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
  },
];

const marksArray4 = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
  },
];

const marksArray5 = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
  },
];

const marksArray6 = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
  },
];

const valueArrays = [];
//default 값

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#211d1d" : "#211d1d",
  padding: "15px 0",
  "& .MuiSlider-root": {
    height: "1px",
    padding: "0px",
  },
  "& .MuiSlider-thumb": {
    height: 22,
    width: 22,
    "&:focus, &:hover, &.Mui-active": {
      width: 22,
      height: 22,
      "@media (hover: none)": {
        // boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#211d1d",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    background: "transparent",
  },
  "& .MuiSlider-rail": {
    opacity: "1",
    height: "1px",
    backgroundColor: "#211d1d",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#211d1d",
    height: 8,
    width: 1,
  },
}));

function valueLabelFormat(value) {
  let scaledValue = value;
  return `${scaledValue} `;
}

function calculateValue(value, sliderIndex) {
  let adjustedValue = value;

  if (sliderIndex === 0) {
    adjustedValue = Math.min(100, Math.max(0, adjustedValue));
    adjustedValue = 18 + Math.floor((adjustedValue / 100) * (64 - 18));
  } else if (sliderIndex === 1) {
    adjustedValue = Math.min(100, Math.max(0, adjustedValue));
    adjustedValue = 31 + Math.floor((adjustedValue / 100) * (80 - 31));
  } else if (sliderIndex === 2 || sliderIndex === 3 || sliderIndex === 4) {
    adjustedValue = Math.min(100, Math.max(0, adjustedValue));
    adjustedValue = 0 + Math.floor((adjustedValue / 100) * (10000000 - 0));
  } else if (sliderIndex === 5) {
    const step = 20;
    const minValue = marksArray6[0].value;
    const maxValue = marksArray6[marksArray6.length - 1].value;
    adjustedValue = Math.min(maxValue, Math.max(minValue, adjustedValue));
    adjustedValue = Math.round(adjustedValue / step) * step;
  }

  const formattedValue =
    adjustedValue >= 1000
      ? new Intl.NumberFormat().format(adjustedValue)
      : adjustedValue;

  return formattedValue;
}

export default function NonLinearSlider({
  formattedValues,
  SliderTitle,
  SliderType,
  sliderIndex,
   xAxisStart,
  xAxisEnd,
  initialAmount,
  annualSavings,
  newLineValue,
  investmentRiskLevel,
  handleXAxisStartChange,
  handleXAxisEndChange,
  handleInitialAmountChange,
  handleAnnualSavingsChange,
  handleNewLineValueChange,
  handleInvestmentRiskLevelChange,
}) {
  const [value, setValue] = React.useState(valueArrays[sliderIndex]);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);

    }
  };

  const formattedValue = calculateValue(value, sliderIndex);
  const labels = [
    "No risk", // For formattedValue === 0
    "Very low", // For formattedValue === 20
    "Low", // For formattedValue === 40
    "Moderate", // For formattedValue === 60
    "High", // For formattedValue === 80
    "Very high", // For formattedValue === 100
  ];

  if (sliderIndex === 5) {
    let selectedMarks;

    if (sliderIndex === 5) {
      selectedMarks = marksArray6;
    }

    const labelIndex = selectedMarks.findIndex(
      (mark) => mark.value === formattedValue
    );
    const labelText = labels[labelIndex];
    return (
      <Box sx={{ width: "100%", py: 3 }}>
        <FlexBetween mb={1.5}>
          <Typography
            variant="span"
            fontSize={"12px"}
            mb={0}
            color={"#808080"}
            id="non-linear-slider"
            gutterBottom
          >
            {SliderTitle}
          </Typography>

          <Typography variant="h5" fontSize={"14px"} fontWeight={"bold"}>
            {labelText}
          </Typography>
        </FlexBetween>
        <IOSSlider
          aria-label="ios slider"
          value={value}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          step={null}
          valueLabelDisplay="off"
          marks={selectedMarks}
          onChange={handleChange}
        />
      </Box>
    );
  } else {
    // Render the original slider
    let selectedMarks;

    if (sliderIndex === 0) {
      selectedMarks = marksArray1;
    } else if (sliderIndex === 1) {
      selectedMarks = marksArray2;
    } else if (sliderIndex === 2) {
      selectedMarks = marksArray3;
    } else if (sliderIndex === 3) {
      selectedMarks = marksArray4;
    } else if (sliderIndex === 4) {
      selectedMarks = marksArray5;
    }
    return (
      <Box sx={{ width: "100%", py: 3 }}>
        <FlexBetween mb={1.5}>
          <Typography
            variant="span"
            fontSize={"12px"}
            mb={0}
            color={"#808080"}
            id="non-linear-slider"
            gutterBottom
          >
            {SliderTitle}
          </Typography>

          <Typography variant="h5" fontSize={"14px"} fontWeight={"bold"}>
            {formattedValue} {SliderType}
          </Typography>
        </FlexBetween>
        <IOSSlider
          aria-label="ios slider"
          marks={selectedMarks}
          value={value}
          scale={calculateValue}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange}
          valueLabelDisplay="off"
        />
      </Box>
    );
  }
}
