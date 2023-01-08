import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    width: "100%",
    height: "4rem",
    padding: "0px 60px !important",
    backgroundColor: "#fff !important",
    justifyContent: "space-between",
  },

  logoTxt: {
    color: "#22223b",
  },

  navBar: {
    display: "flex",
    alignItems: "center",
  },

  navTxt: {
    fontSize: "18px !important",
    color: "#22223b !important",
    margin: "0px 20px !important",
    textDecoration: "none !important",
  },

  signinTxt: {
    color: "#22223b",
    marginRight: "15px !important",
  },

  createAccBtn: {
    backgroundColor: "#22223b !important",
    fontWeight: "bold !important",
  },
}));

export default useStyles;
