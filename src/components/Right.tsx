import React from "react";
/* Import Mui Components */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import useStyles from "./styles/left";
import image1 from "../images/undraw_envelope.svg";

const Right = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ marginTop: "25px" }}>
      <Card sx={{ marginBottom: "25px" }}>
        <CardHeader
          action={<img src={image1} alt="image1" style={{ width: "80px" }} />}
          title={
            <Typography sx={{ fontWeight: "bold" }}>
              Get Personalised Job Recommendations
            </Typography>
          }
        />
        <CardContent sx={{ marginTop: "-20px" }}>
          <Typography variant="body2" color="text.secondary">
            Registering gives you the benefit to browse & apply variety of jobs
            based on your preferences
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ padding: "0px 15px", paddingBottom: "25px" }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#2ec4b6 !important",
              width: "80%",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Register Now
          </Button>
        </CardActions>
      </Card>
      {/* */}
      <Card sx={{ marginBottom: "25px" }}>
        <CardHeader
          action={
            <img
              src="https://www.captiosusaxons.com/assets/img/logoCap-axons.png"
              alt="image1"
              style={{ width: "80px" }}
            />
          }
          title={
            <Typography sx={{ fontWeight: "bold" }}>
              Get Personalised Job Recommendations
            </Typography>
          }
        />
        <CardContent sx={{ marginTop: "-20px" }}>
          <Typography variant="body2" color="text.secondary">
            Captiosus Axons created in 2020 specialized the field of Artificial
            Intelligence, Big Data, Web Development, Mobile Development
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ padding: "0px 15px", paddingBottom: "25px" }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#2ec4b6 !important",
              width: "80%",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            See More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Right;
