import { useState } from "react";
/* Import Styles */
import useStyles from "./styles/left";
/* Import Mui Components */
import {
  Box,
  ListSubheader,
  ListItemButton,
  List,
  ListItemText,
  Collapse,
} from "@mui/material";
/* Import Mui Icons */
import { ExpandLess, ExpandMore, FilterList } from "@mui/icons-material";

/* Import Left components */
import Freshness from "./Left/Freshness";
import JobType from "./Left/JobType";
import Experience from "./Left/Experience";
import Location from "./Left/Location";

/* Define vars */
const ELEMENTS = [
  {
    name: "Freshness",
    component: () => <Freshness />,
  },
  {
    name: "Job Type",
    component: () => <JobType />,
  },
  {
    name: "Experience",
    component: () => <Experience />,
  },
  {
    name: "Location",
    component: () => <Location />,
  },
];

/* Main Component */
const Left = () => {
  const classes = useStyles();
  const [freshness, setFreshness] = useState(true);
  const [job, setJob] = useState(true);
  const [experience, setExperience] = useState(true);
  const [location, setLocation] = useState(true);

  const handleClick = (type: string) => {
    switch (type) {
      case "freshness":
        setFreshness((state) => !state);
        return;
      case "job":
        setJob((state) => !state);
        return;
      case "experience":
        setExperience((state) => !state);
        return;
      case "location":
        setLocation((state) => !state);
        return;
      default:
        return;
    }
  };

  return (
    <Box
      className={classes.root}
      sx={{ display: "flex", justifyContent: "flex-end" }}
    >
      <List
        sx={{ width: "80%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <FilterList />
            All Filters
          </ListSubheader>
        }
      >
        {ELEMENTS.map((item, key) => {
          let open: boolean;
          let txt: string;
          const sx = {
            padding: "0px 30px",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
          };

          if (item.name === "Freshness") {
            open = freshness;
            txt = "freshness";
          } else if (item.name === "Job Type") {
            open = job;
            txt = "job";
          } else if (item.name === "Experience") {
            open = experience;
            txt = "experience";
          } else {
            open = location;
            txt = "location";
          }
          return (
            <div key={key}>
              <ListItemButton onClick={handleClick.bind(this, txt)}>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                />
                {open ? (
                  <ExpandLess style={{ fontSize: 20 }} />
                ) : (
                  <ExpandMore style={{ fontSize: 20 }} />
                )}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  sx={item.name === "Experience" ? sx : null}
                >
                  {item.component()}
                </List>
              </Collapse>
            </div>
          );
        })}
      </List>
    </Box>
  );
};

export default Left;
