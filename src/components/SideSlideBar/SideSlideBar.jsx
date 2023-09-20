// SliderComponent.jsx
import React from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import FlexBetween from "components/FlexBetween";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// function ValueLabelComponent(props) {
//   const { children, value } = props;

//   return (
//     <Tooltip enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }

// ValueLabelComponent.propTypes = {
//   children: PropTypes.element.isRequired,
//   value: PropTypes.number.isRequired,
// };

const marksArray = [
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
const SliderComponent = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  displayValue,
}) => {
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
          {label}
        </Typography>

        <Typography variant="h5" fontSize={"14px"} fontWeight={"bold"}>
          {displayValue}
        </Typography>
      </FlexBetween>

      <IOSSlider
        marks={marksArray}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        // step={step}
        aria-labelledby={`${label.toLowerCase().replace(/ /g, "-")}-slider`}
      />
    </Box>
  );
};

export default SliderComponent;
