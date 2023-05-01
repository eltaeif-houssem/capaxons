import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Point from "./Point";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

interface IJobDescription {
  description: string;
  qualification: string;
  responsability: string[];
  skills: string[];
  goodToHaveSkills: string[];
  role: string;
  industryType: string;
  functionalArea: string;
  employmentType: string;
  roleCategory: string;
  education: string;
  keySkills: string[];
}

/* Define vars */
const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    padding: "2rem",
    boxShadow: "0px 4px 4px #0003",
  },

  title: {
    fontSize: "21px !important",
  },

  description: {
    marginLeft: "15px !important",
    fontSize: "14px !important",
    marginTop: "10px !important",
  },

  hr: {
    marginTop: "30px",
    color: "#0008",
  },

  icons: {
    marginTop: "25px",
    marginLeft: "25px",
  },

  icon: {
    color: "#202A4D",
    marginRight: "15px",
  },
});

const JobDescription = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Job description</Typography>

      <Typography className={classes.description}>
        Engineering Directors (AD), Portfolio Engineering Director (D),
        Engineering Delivery Partner (SD)
      </Typography>

      <Point
        title="Qualification"
        points={["Bachelors or equiv in technical degree"]}
        type="text"
      />

      <Point
        title="Responsibility"
        points={[
          "Ensure outcomes are SMART (specific, measurable, achievable, realistic, and timely).",
          "Ensure Cognizant''s role in achieving the desired outcomes is well understood and agreed upon by all parties.",
          "Ensure Cognizant''s role in achieving the desired outcomes is well understood and agreed upon by all parties.",
          "Ensure that all work taken on by PODs/teams is focused on, aligned with, and contributing to one or more",
          "Establish an initialstate delivery operating model for the PODs/teams is wellaligned with the client operating model.",
        ]}
        type="text"
      />

      <Point
        title="Must Have Skills"
        points={[
          "Spring Boot",
          "Spring REST",
          "REST Web Services",
          "Core Java",
          "Core Java",
          "Hibernate",
        ]}
        type="text"
      />

      <Point
        title="Must Have Skills"
        points={["Digital Strategy and Delivery", "English", "French"]}
        type="text"
      />

      <Point title="Role" points={["Head - Engineering"]} type="text" />

      <Point
        title="Industry Type"
        points={["IT Services & Consulting"]}
        type="text"
      />

      <Point
        title="Functional Area"
        points={["Engineering - Software"]}
        type="text"
      />

      <Point
        title="Employment Type"
        points={["Full Time, Permanent"]}
        type="text"
      />

      <Point
        title="Role Category"
        points={["Software Development"]}
        type="text"
      />

      <Point
        title="Education"
        points={["B.Tech/B.E. in Any Specialization"]}
        type="text"
      />

      <Point
        title="Key Skills"
        points={[
          "Java",
          "Sof Skills",
          "Rest",
          "Product Testing",
          "Engineering Management",
          "Continious improvement",
        ]}
        type="box"
      />
      <hr className={classes.hr} />
      <Box className={classes.icons}>
        <FacebookIcon className={classes.icon} />
        <LinkedInIcon className={classes.icon} />
        <TwitterIcon className={classes.icon} />
      </Box>
    </Box>
  );
};

export default JobDescription;
