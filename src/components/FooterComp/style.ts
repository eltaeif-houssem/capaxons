import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "40vh",
    backgroundColor: "#ECF3F5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2rem 6rem",
  },

  top: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  bigText: {
    fontSize: "25px !important",
    color: "#202A4D",
  },

  span: {
    fontSize: "14px !important",
  },

  hr: {
    color: "rgba(0,0,0,0.32)",
  },

  bottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  smallText: {
    fontSize: "15px !important",
    marginLeft: "40px !important",
    color: "#202A4D",
  },
}));

export default useStyles;
