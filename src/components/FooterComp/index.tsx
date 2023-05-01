import { Box, Typography } from "@mui/material";
import React from "react";

import useStyles from "./style";

const FooterComp = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} sx={{ height: "40vh" }}>
      <Box className={classes.top}>
        <Typography className={classes.bigText}>Logo</Typography>
        <Typography className={classes.bigText}>
          Write Us <span className={classes.span}>job@captiosusaxons.com</span>
        </Typography>
        <Typography className={classes.bigText}>
          Call Us <span className={classes.span}>00 25 255 255</span>
        </Typography>
      </Box>
      <hr className={classes.hr} />
      <Box className={classes.bottom}>
        <Typography className={classes.smallText}>Home</Typography>
        <Typography className={classes.smallText}>Jobs</Typography>
        <Typography className={classes.smallText}>Account</Typography>
        <Typography className={classes.smallText}>Contact</Typography>
        <Typography className={classes.smallText}>Privacy & Legal</Typography>
      </Box>
    </Box>
  );
};

export default FooterComp;
