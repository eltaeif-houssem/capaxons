import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const Location = () => {
  return (
    <FormGroup sx={{ padding: "0px 40px" }}>
      <FormControlLabel
        control={
          <Checkbox
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
            Al-Monastir
          </Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
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
          <Typography sx={{ fontSize: 14, color: "gray" }}>Sousse</Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
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
          <Typography sx={{ fontSize: 14, color: "gray" }}>Sfax</Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
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
          <Typography sx={{ fontSize: 14, color: "gray" }}>Tunis</Typography>
        }
      />
    </FormGroup>
  );
};

export default Location;
