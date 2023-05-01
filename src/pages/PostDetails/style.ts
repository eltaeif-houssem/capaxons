import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
  },

  content: {
    display: "flex",
  },

  leftContent: {
    width: "70% !important",
    padding: "3rem",
  },
}));

export default useStyles;
