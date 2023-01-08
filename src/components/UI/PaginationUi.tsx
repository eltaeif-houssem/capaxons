import React from "react";
import { Box, Button, Pagination, PaginationItem, Stack } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
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
const PaginationUi = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "50px",
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={5}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => (
                  <Button
                    variant="outlined"
                    startIcon={<NavigateBeforeIcon />}
                    size="small"
                    className={classes.button}
                    sx={{ textTransform: "none" }}
                  >
                    Previous
                  </Button>
                ),
                next: () => (
                  <Button
                    variant="outlined"
                    endIcon={<NavigateNextIcon />}
                    size="small"
                    className={classes.button}
                    sx={{ textTransform: "none" }}
                  >
                    Next
                  </Button>
                ),
              }}
              {...item}
            />
          )}
          classes={{ ul: classes.ul }}
        />
      </Stack>
    </Box>
  );
};

export default PaginationUi;
