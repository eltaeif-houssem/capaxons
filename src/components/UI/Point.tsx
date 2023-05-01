import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import CircleIcon from "@mui/icons-material/Circle";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "25px",
  },

  title: {
    fontSize: "14px !important",
    fontWeight: "bold !important",
  },

  points: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingLeft: "15px",
  },

  point: {
    display: "flex",
    alignItems: "center",
  },

  dot: {
    fontSize: "10px !important",
    color: "rgba(0,0,0,0.5) !important",
  },

  pointText: {
    fontSize: "14px !important",
    marginLeft: "10px !important",
  },

  box: {
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "#fff",
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 15px",
    borderRadius: "10px",
  },
});

interface IPoint {
  title: string;
  points: string[];
  type: "text" | "box";
}
const Point = (props: IPoint) => {
  const { title, points, type } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{title}:</Typography>
      <Box
        className={classes.points}
        sx={{ flexDirection: `${type === "box" ? "row" : "column"}` }}
      >
        {type === "text" &&
          points.map((item) => (
            <Box className={classes.point}>
              <CircleIcon className={classes.dot} />
              <Typography className={classes.pointText}>{item}</Typography>
            </Box>
          ))}

        {type === "box" &&
          points.map((item) => (
            <Box className={classes.box}>
              <Typography
                className={classes.pointText}
                sx={{
                  marginLeft: `${type === "box" ? "0px" : "10px"} !important`,
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Point;
