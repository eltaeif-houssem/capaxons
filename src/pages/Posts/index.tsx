import React from "react";
import Box from "@mui/material/Box";

import useStyles from "./style";

import Left from "../../components/Left";
import Middle from "../../components/Middle";
import Right from "../../components/Right";

import Header from "../../components/Header";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box className={classes.home}>
        <Left />
        <Middle />
        <Right />
      </Box>
    </>
  );
};

export default Home;
