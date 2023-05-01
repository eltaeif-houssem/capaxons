import React from "react";

import { Box } from "@mui/material";
import HomeComp from "../../components/HomeComp";
import JobsComp from "../../components/JobsComp";
import FooterComp from "../../components/FooterComp";

import useStyles from "./style";

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <HomeComp />
      <JobsComp />
      <FooterComp />
    </Box>
  );
};

export default LandingPage;
