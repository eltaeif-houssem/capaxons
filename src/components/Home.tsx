import React from "react";
import Box from "@mui/material/Box";

import useStyles from "./styles/home";

import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.home}>
      <Left />
      <Middle />
      <Right />
    </Box>
  );
};

export default Home;
