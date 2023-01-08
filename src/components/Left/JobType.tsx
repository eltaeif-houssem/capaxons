import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";

const JobType = () => {
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
            Full-Time
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
          <Typography sx={{ fontSize: 14, color: "gray" }}>
            Part-Time
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
          <Typography sx={{ fontSize: 14, color: "gray" }}>Contract</Typography>
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
          <Typography sx={{ fontSize: 14, color: "gray" }}>
            Internship
          </Typography>
        }
      />
    </FormGroup>
  );
};

export default JobType;
