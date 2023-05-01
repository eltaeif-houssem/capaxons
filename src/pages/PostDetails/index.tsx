import { Box } from "@mui/material";
import React from "react";
import useStyles from "./style";

import Header from "../../components/Header";
import Right from "../../components/Right";

import Offer from "../../components/UI/Offer";
import JobDescription from "../../components/UI/JobDescription";
import CompanyDescription from "../../components/UI/CompanyDescription";

const PostDetails = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ minHeight: "100vh" }}>
      <Header />
      <Box className={classes.content}>
        <Box className={classes.leftContent}>
          <Offer
            data={{
              company: "captiosus",
              description: "this is a small company",
              job: "Full stack developer",
              location: "Monastir",
              reviews: 3,
              salary: "50",
              technologies: ["Html", "css", "React", "Node"],
              viewers: 5,
              years: "2 ans",
            }}
          />

          <JobDescription />
          <CompanyDescription />
        </Box>
        <Right />
      </Box>
    </Box>
  );
};

export default PostDetails;
