import * as React from "react";
import { makeStyles } from "@mui/styles";

/* Import Mui Components */
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Rating,
  FormControlLabel,
} from "@mui/material";
/* Import Mui Icons */
import {
  RemoveRedEye,
  BusinessCenter,
  FavoriteBorder,
  AttachMoney,
  LocationOn,
  LibraryBooks,
  Check,
  History,
  NearMe,
} from "@mui/icons-material";

/* Define vars */
const useStyles = makeStyles({
  button1: {
    marginRight: "15px !important",
    borderColor: "#2ec4b6 !important",
    color: "#2ec4b6 !important",
  },

  button2: {
    backgroundColor: "#2ec4b6 !important",
    color: "#fff",
  },
});

/* Define prop interface */
interface Props {
  data: {
    job: string;
    company: string;
    reviews: number;
    viewers: number;
    years: string;
    salary: string;
    location: string;
    description: string;
    technologies: string[];
  };
}
const RecipeReviewCard: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <Card sx={{ width: "100%", marginBottom: "20px" }}>
      <CardHeader
        title={data.job}
        titleTypographyProps={{ fontWeight: "bold", fontSize: "14px" }}
        subheader={
          <Box sx={{ display: "flex", alignItems: "center", marginTop: "0px" }}>
            <Typography sx={{ fontSize: "12px", marginRight: "5px" }}>
              {data.company}
            </Typography>
            <Rating name="customized-10" value={1} max={1} size="small" />
            <Typography sx={{ fontSize: "12px", marginLeft: "5px" }}>
              ({data.reviews} Reviews)
            </Typography>
          </Box>
        }
        action={
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              sx={{
                display: "flex",
              }}
              control={
                <RemoveRedEye
                  name="loading"
                  color="primary"
                  sx={{ marginRight: "7px", color: "gray", width: "20px" }}
                />
              }
              label={
                <Typography sx={{ fontSize: "12px" }}>
                  {data.viewers} Viewers
                </Typography>
              }
            />
            <FormControlLabel
              sx={{
                display: "flex",
              }}
              control={
                <FavoriteBorder
                  name="loading"
                  color="primary"
                  sx={{
                    marginRight: "7px",
                    marginLeft: "15px",
                    color: "gray",
                    width: "20px",
                  }}
                />
              }
              label={<Typography sx={{ fontSize: "12px" }}>Save</Typography>}
            />
          </Box>
        }
      />
      {/* Card Content */}
      <CardContent>
        <Box sx={{ display: "flex", marginTop: "-20px" }}>
          <FormControlLabel
            sx={{
              display: "flex",
              marginRight: "30px",
            }}
            control={
              <BusinessCenter
                name="loading"
                color="primary"
                sx={{
                  marginRight: "7px",
                  marginLeft: "15px",
                  color: "gray",
                  width: "20px",
                }}
              />
            }
            label={
              <Typography sx={{ fontSize: "12px" }}>{data.years}</Typography>
            }
          />
          <FormControlLabel
            sx={{
              display: "flex",
              marginRight: "30px",
            }}
            control={
              <AttachMoney
                name="loading"
                color="primary"
                sx={{
                  marginLeft: "15px",
                  color: "gray",
                  width: "20px",
                }}
              />
            }
            label={
              <Typography sx={{ fontSize: "12px" }}>{data.salary}</Typography>
            }
          />
          <FormControlLabel
            sx={{
              display: "flex",
            }}
            control={
              <LocationOn
                name="loading"
                color="primary"
                sx={{
                  marginLeft: "15px",
                  color: "gray",
                  width: "20px",
                }}
              />
            }
            label={
              <Typography sx={{ fontSize: "12px" }}>{data.location}</Typography>
            }
          />
        </Box>
        <FormControlLabel
          sx={{
            display: "flex",
          }}
          control={
            <LibraryBooks
              name="loading"
              color="primary"
              sx={{
                marginLeft: "15px",
                marginRight: "7px",
                color: "gray",
                width: "20px",
              }}
            />
          }
          label={
            <Typography sx={{ fontSize: "12px" }}>
              {data.description}
            </Typography>
          }
        />
        {/* Skills */}
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            padding: "0px 15px",
          }}
        >
          {data.technologies.map((item, key) => (
            <Typography
              sx={{
                backgroundColor: "#dad7cd",
                width: "fit-content",
                padding: "7px",
                marginLeft: "10px",
                fontSize: "10px",
                borderRadius: "7px",
                color: "#000",
              }}
              key={key}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          width: "100%",
          display: "flex",
          padding: "0px 40px",
          paddingBottom: "15px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <FormControlLabel
            sx={{
              display: "flex",
              marginTop: "7px",
              backgroundColor: "#cbf3f0",
              padding: "0px 10px",
              borderRadius: "7px",
            }}
            control={
              <Check
                name="loading"
                color="primary"
                sx={{
                  marginRight: "7px",
                  color: "gray",
                  width: "20px",
                }}
              />
            }
            label={<Typography sx={{ fontSize: "12px" }}>Enabled</Typography>}
          />
          <FormControlLabel
            sx={{
              display: "flex",
              marginTop: "7px",
              backgroundColor: "#dad7cd",
              padding: "0px 10px",
              borderRadius: "7px",
            }}
            control={
              <History
                name="loading"
                color="primary"
                sx={{
                  marginRight: "7px",
                  color: "gray",
                  width: "20px",
                }}
              />
            }
            label={
              <Typography sx={{ fontSize: "12px" }}>2 Days Ago</Typography>
            }
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button
            variant="outlined"
            startIcon={<NearMe />}
            size="small"
            className={classes.button1}
            style={{ textTransform: "none", fontWeight: "bold" }}
          >
            View
          </Button>
          <Button
            variant="contained"
            startIcon={<NearMe />}
            size="small"
            className={classes.button2}
            style={{ textTransform: "none", fontWeight: "bold" }}
          >
            Apply
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default RecipeReviewCard;
