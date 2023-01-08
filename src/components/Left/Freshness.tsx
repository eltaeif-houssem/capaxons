import React from "react";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

const Freshness = () => {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
      sx={{ padding: "0px 40px" }}
    >
      <FormControlLabel
        value={1}
        control={
          <Radio
            sx={{
              "& .MuiSvgIcon-root": {
                height: 15,
                width: 15,
                color: "gray",
              },
            }}
          />
        }
        label={
          <Typography sx={{ fontSize: 14, color: "gray" }}>
            Last 1 day
          </Typography>
        }
        sx={{ fontSize: "12px" }}
      />
      {/* */}
      <FormControlLabel
        value={3}
        control={
          <Radio
            sx={{
              "& .MuiSvgIcon-root": {
                height: 15,
                width: 15,
                color: "gray",
              },
            }}
          />
        }
        label={
          <Typography sx={{ fontSize: 14, color: "gray" }}>
            Last 3 days
          </Typography>
        }
        sx={{ fontSize: "12px" }}
      />
      <FormControlLabel
        value={7}
        control={
          <Radio
            sx={{
              "& .MuiSvgIcon-root": {
                height: 15,
                width: 15,
                color: "gray",
              },
            }}
          />
        }
        label={
          <Typography sx={{ fontSize: 14, color: "gray" }}>
            Last 7 days
          </Typography>
        }
        sx={{ fontSize: "12px" }}
      />
      <FormControlLabel
        value={15}
        control={
          <Radio
            sx={{
              "& .MuiSvgIcon-root": {
                height: 15,
                width: 15,
                color: "gray",
              },
            }}
          />
        }
        label={
          <Typography sx={{ fontSize: 14, color: "gray" }}>
            Last 15 days
          </Typography>
        }
        sx={{ fontSize: "12px" }}
      />
    </RadioGroup>
  );
};

export default Freshness;
