import * as React from "react";
import FlexBetween from "components/FlexBetween";
import PropTypes from "prop-types";
import { Box, Slider, Typography, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
// import SliderButton from "../assets/btn_barbutton.svg";
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
// const marks = [
//   {
//     value: 0,
//   },
//   {
//     value: 25,
//   },
//   {
//     value: 50,
//   },
//   {
//     value: 75,
//   },
//   {
//     value: 100,
//   },
// ];

const marksArray1 = [
  {
    value: 0,
  },
  {
    value: 25,
  },
  {
    value: 50,
  },
  {
    value: 75,
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
    value: 25,
  },
  {
    value: 50,
  },
  {
    value: 75,
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
    value: 25,
  },
  {
    value: 50,
  },
  {
    value: 75,
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
    value: 25,
  },
  {
    value: 50,
  },
  {
    value: 75,
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
    value: 25,
  },
  {
    value: 50,
  },
  {
    value: 75,
  },
  {
    value: 100,
  },
];
const valueArrays = [40, 10, 35, 50, 8];
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
  // 조정된 값을 저장할 변수를 만듭니다.
  let adjustedValue = value;

  // sliderIndex를 확인하여 어떤 슬라이더가 사용되는지 판단합니다.
  if (sliderIndex === 0) {
    // 첫 번째 슬라이더인 경우, 조정된 값이 20000보다 큰지 확인합니다.
    if (adjustedValue > 20000) {
      // 크다면, 조정된 값을 10 감소시킵니다.
      adjustedValue -= 10;
    }
    adjustedValue *= 1000;
  } else if (sliderIndex === 1) {
    // 두 번째 슬라이더인 경우, 조정된 값이 10000보다 큰지 확인합니다.
    if (adjustedValue > 10000) {
      // 크다면, 조정된 값을 10 감소시킵니다.
      adjustedValue -= 10;
    }
    adjustedValue *= 1000;
  } else if (sliderIndex === 2) {
    // 두 번째 슬라이더인 경우, 조정된 값이 10000보다 큰지 확인합니다.
    if (adjustedValue > 1000) {
      // 크다면, 조정된 값을 10 감소시킵니다.
      adjustedValue -= 10;
    }
    adjustedValue *= 10;
  }
  // 다른 슬라이더 인덱스에 대해서도 필요한 경우 유사한 조건을 추가할 수 있습니다.
  else if (sliderIndex === 3) {
    // 두 번째 슬라이더인 경우, 조정된 값이 10000보다 큰지 확인합니다.
    if (adjustedValue > 1000) {
      // 크다면, 조정된 값을 10 감소시킵니다.
      adjustedValue -= 10;
    }
    adjustedValue *= 10;
  } else if (sliderIndex === 4) {
    // 두 번째 슬라이더인 경우, 조정된 값이 10000보다 큰지 확인합니다.
    if (adjustedValue > 100) {
      // 크다면, 조정된 값을 10 감소시킵니다.
      adjustedValue -= 10;
    }
    adjustedValue *= 1;
  }
  // 조정이 완료된 후, 조정된 값에 1000을 곱해줍니다.
  const formattedValue =
    adjustedValue >= 1000
      ? new Intl.NumberFormat().format(adjustedValue)
      : adjustedValue;

  return formattedValue;
  // 최종적으로 조정된 값을 반환합니다.
}

export default function NonLinearSlider({
  SliderTitle,
  SliderType,
  sliderIndex,
}) {
  const [value, setValue] = React.useState(valueArrays[sliderIndex]); // 기본 값 배열의 첫 번째 값

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      // 슬라이더의 값 배열에 따라서 다른 인덱스의 값을 설정
      setValue(newValue);
    }
  };
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
  const formattedValue = calculateValue(value, sliderIndex);
  return (
    <Box sx={{ width: "100%", py: 4 }}>
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
