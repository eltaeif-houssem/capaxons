import React from "react";
import useStyles from "./styles/middle";

/* Import Mui Components */
import { Box, Typography } from "@mui/material";
/* Import Ui Components */
import Card from "./UI/Card";
import PaginationUi from "./UI/PaginationUi";

/* Define vars */
const ELEMENTS = [
  {
    job: "Senior Engineering Manager",
    company: "Captiosus axons",
    reviews: 150,
    viewers: 180,
    years: "1-2 Yrs",
    salary: "Not disclosed",
    location: "Sousse / Tunis",
    description:
      "Bachelors or equiv in technical degree Must Have SkillsGood To Have Skills",
    technologies: [
      "IT Skills",
      "Java",
      "Testing",
      "Soft Skills",
      "Rest",
      "Product Testing",
      "Web Technologies",
    ],
  },
  {
    job: "Head-Cyber Security ( VP / SVP ) For ReBIT",
    company: "Captiosus axons",
    reviews: 150,
    viewers: 180,
    years: "1-2 Yrs",
    salary: "50k-65k",
    location: "Sousse / Tunis",
    description:
      "Bachelors or equiv in technical degree Must Have SkillsGood To Have Skills",
    technologies: [
      "IT Skills",
      "Java",
      "Testing",
      "Soft Skills",
      "Rest",
      "Product Testing",
      "Web Technologies",
    ],
  },
  {
    job: "Head-Cyber Security ( VP / SVP ) For ReBIT",
    company: "Captiosus axons",
    reviews: 150,
    viewers: 180,
    years: "1-2 Yrs",
    salary: "50k-65k",
    location: "Sousse / Tunis",
    description:
      "Bachelors or equiv in technical degree Must Have SkillsGood To Have Skills",
    technologies: [
      "IT Skills",
      "Java",
      "Testing",
      "Soft Skills",
      "Rest",
      "Product Testing",
      "Web Technologies",
    ],
  },
];
const Middle = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.topTxt} sx={{ marginBottom: "10px" }}>
        1 - 20 of 84 Information Technology Jobs
      </Typography>
      {ELEMENTS.map((data, key) => (
        <Card key={key} data={data} />
      ))}
      <PaginationUi />
    </Box>
  );
};

export default Middle;
