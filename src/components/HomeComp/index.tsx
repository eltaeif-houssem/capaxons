import React from "react";
import { Box, Typography } from "@mui/material";

import useStyles from "./style";
import SubHeader from "../SubHeader";
import SearchComp from "../SearchComp";

import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const HomeComp = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} sx={{ height: "100vh" }}>
      <Box className={classes.layer} sx={{ height: "100vh" }}>
        <SubHeader />
        <Box className={classes.content}>
          <Typography className={classes.bigText}>
            New
            <span className={classes.span}> Offers</span>
          </Typography>
          <Typography className={classes.bigText}>are waiting</Typography>
          <Typography className={classes.bigText}>for you</Typography>
          <Typography className={classes.smallText}>find a new job</Typography>
          <SearchComp />
          <Box className={classes.follow}>
            <Typography className={classes.lastText}>Follow us</Typography>
            <TwitterIcon className={classes.followIcon} />
            <LinkedInIcon className={classes.followIcon} />
            <FacebookIcon className={classes.followIcon} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComp;
