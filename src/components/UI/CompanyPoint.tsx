import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginTop: "20px",
  },

  title: {
    fontSize: "15px !important",
    fontWeight: "bold !important",
  },

  content: {
    fontSize: "14px !important",
    marginLeft: "15px !important",
  },
}));

interface ICompanyPoint {
  title: string;
  content: string;
}
const CompanyPoint = (props: ICompanyPoint) => {
  const { title, content } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.content}>{content}</Typography>
    </Box>
  );
};

export default CompanyPoint;
