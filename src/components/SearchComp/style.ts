import { makeStyles } from "@mui/styles";
import bgImage from "../../assets/images/landing-page.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "33rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 15px",
    marginTop: "35px",
    boxShadow: "0px 4px 4px #0005",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color: "#202A4D",
    fontSize: "30px !important",
    marginRight: "15px",
  },

  searchInput: {
    fontSize: "16px !important",
    color: "#202A4D",
    fontWeight: "550 !important",
    width: "10rem",
  },

  filterBox: {
    display: "flex",
    alignItems: "center",
    width: "12.5rem",
    justifyContent: "space-between",
  },

  leftFilterBox: {
    display: "flex",
    alignItems: "center",
  },

  filterButton: {
    width: "5rem !important",
    color: "#202A4D !important",
  },

  searchButton: {
    backgroundColor: "#12CC9E !important",
    color: "#fff !important",
    fontWeight: "bold !important",
    width: "5rem",
  },
}));

export default useStyles;
