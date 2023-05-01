import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CompanyPoint from "./CompanyPoint";

/* Define vars */
const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    padding: "2rem",
    boxShadow: "0px 4px 4px #0003",
    marginTop: "25px",
  },
});

const CompanyDescription = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CompanyPoint title="About Company" content="Captiosus axons" />
      <CompanyPoint title="Address" content="Lamta Monastir / Tunis" />
      <CompanyPoint
        title="Description"
        content="Captiosus Axons created in 2020 specialized in the field of Artificial Intelligence, Big Data, Web Development
Mobile Development. Captiosus Axons created in 2020 specialized in the field of Artificial Intelligence, Big Data, Web Development
Mobile Development"
      />
      <CompanyPoint title="Description" content="More 50 engineers" />
    </Box>
  );
};

export default CompanyDescription;
