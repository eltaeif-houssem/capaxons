import { makeStyles } from "@mui/styles";
import bgImage from "../../assets/images/landing-page.png";

const useStyles = makeStyles((theme) => ({
  root: {
    postion: "relative",
    width: "100%",
    height: "100vh !important",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
  },

  layer: {
    position: "absolute",
    width: "100%",
    heigth: "100vh !important",
    backgroundColor: "rgb(236, 243, 245,0.8) !important",
  },

  content: {
    padding: "4rem 8rem",
  },

  bigText: {
    color: "#202A4D",
    fontSize: "34px !important",
  },

  span: {
    color: "#12CC9E",
  },

  smallText: {
    color: "rgba(32, 42, 77,0.7)",
    fontSize: "18px !important",
  },

  lastText: {
    color: "rgba(32, 42, 77,0.7)",
    fontSize: "15px !important",
  },

  follow: {
    marginTop: "7rem !important",
    display: "flex",
    alignItems: "center",
  },

  followIcon: {
    marginLeft: "20px",
    color: "#202A4D",
  },
}));

export default useStyles;
