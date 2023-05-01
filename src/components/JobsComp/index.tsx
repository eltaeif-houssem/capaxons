import React from "react";
import { Box, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import useStyles from "./style";

import Offer from "../UI/Offer";
import { DUMMY_DATA } from "./mock-data";

const JobsComp = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box className={classes.headerLeft}>
          <Typography>Job</Typography>
          <Typography>offers</Typography>
        </Box>
        <Box className={classes.headerRight}>
          <Typography>See All</Typography>
          <EastIcon />
        </Box>
      </Box>
      <Box className={classes.offers}>
        <Box className={classes.leftOffers}>
          {DUMMY_DATA.slice(0, 2).map((item: any, key: number) => (
            <Offer data={item} key={key} />
          ))}
        </Box>
        <Box className={classes.rightOffers}>
          {DUMMY_DATA.slice(0, 2).map((item: any, key: number) => (
            <Offer data={item} key={key} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default JobsComp;
