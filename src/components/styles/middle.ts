import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "1.7",
    padding: "25px",
  },

  topTxt: {
    fontSize: "12px !important",
    color: "gray",
  },

  button: {
    marginRight: "15px !important",
    borderColor: "#2ec4b6 !important",
    color: "#2ec4b6 !important",
  },

  ul: {
    "& .MuiPaginationItem-root": {
      color: "#2ec4b6",
      fontWeight: "bold",
    },
    "& .Mui-selected": {
      backgroundColor: "#2ec4b6 !important",
      color: "#fff",
    },
  },
}));

export default useStyles;
