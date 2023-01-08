import React from "react";
import PrettoSlider from "../UI/PrettoSlider";

// Define vars
const marks = [
  {
    value: 0,
    label: "0 Yrs",
  },

  {
    value: 10,
    label: "10 Yrs",
  },
];
const Experience = () => {
  return (
    <PrettoSlider
      valueLabelDisplay="auto"
      aria-label="pretto slider"
      marks={marks}
      min={0}
      max={10}
    />
  );
};

export default Experience;
