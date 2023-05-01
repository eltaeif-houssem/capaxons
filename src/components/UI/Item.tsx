import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Item = () => {
  const classes = useStyles();
  return <Box className={classes.root}>Item</Box>;
};

export default Item;
