import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh !important",
    backgroundColor: "#fff",
    padding: "2.5rem 8rem",
  },

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerLeft: {
    "& p": {
      fontSize: "28px !important",
      fontWeight: "bold",
      color: "#202A4D",
    },
  },

  headerRight: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "& p": {
      marginRight: "10px",
      color: "#202A4D",
    },
  },

  offers: {
    marginTop: "20px",
    width: "100%",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
  },

  leftOffers: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  rightOffers: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
}));

export default useStyles;
