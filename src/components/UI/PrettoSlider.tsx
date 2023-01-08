import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const PrettoSlider = styled(Slider)({
  width: "80%",
  color: "#2ec4b6",
  height: 5,

  "& .MuiSlider-track": {
    border: "none",
  },

  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },

  "& .MuiSlider-valueLabel": {
    lineHeight: 1.1,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 25,
    height: 25,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#2ec4b6",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
  "& .MuiSlider-markLabel": {
    color: "gray",
    fontSize: "10px",
  },
});

export default PrettoSlider;
