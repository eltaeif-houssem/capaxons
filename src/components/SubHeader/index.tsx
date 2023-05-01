import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

//
import useStyles from "./style";

const SubHeader = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} sx={{ position: "relative" }}>
      <Toolbar
        className={classes.toolBar}
        sx={{ backgroundColor: "transparent" }}
      >
        <Typography variant="h5" className={classes.logoTxt}>
          Logo
        </Typography>

        <Box className={classes.navBar}>
          <Link
            href="#home"
            className={classes.navTxt}
            sx={{ textDecoration: "underline !important" }}
          >
            Home
          </Link>
          <Link href="#jobs" className={classes.navTxt}>
            Jobs
          </Link>
          <Link href="#about" className={classes.navTxt}>
            About Us
          </Link>
          <Link href="#contact" className={classes.navTxt}>
            Contact
          </Link>
        </Box>
        <Box className={classes.navBar}>
          <Typography className={classes.signinTxt}>Sign In</Typography>
          <Button
            variant="contained"
            className={classes.createAccBtn}
            style={{ textTransform: "none" }}
          >
            Create account
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SubHeader;
