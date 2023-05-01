import React from "react";
import {
  Box,
  InputBase,
  TextField,
  Autocomplete,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";

import useStyles from "./style";

import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const options = ["Tunis", "Monastir", "Sousse", "Sfax"];

const SearchComp = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState(options[0]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (item: string) => {
    if (typeof item === "string") {
      setSearchValue(item);
    }

    setAnchorEl(null);
  };
  return (
    <Box className={classes.root} sx={{ height: "3.5rem" }}>
      <Box className={classes.searchBox}>
        <SearchIcon className={classes.icon} />
        <InputBase
          placeholder="Job title keyword"
          className={classes.searchInput}
        />
      </Box>
      <Box className={classes.filterBox}>
        <Box className={classes.leftFilterBox}>
          <PlaceIcon fontSize="small" />
          <Button
            id="basic-button"
            aria-haspopup="true"
            onClick={handleClick}
            endIcon={<ArrowDropDownIcon />}
            className={classes.filterButton}
            sx={{ textTransform: "lowercase" }}
          >
            {searchValue}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options.map((item, key) => (
              <MenuItem onClick={handleClose.bind(null, item)} key={key}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Button
          className={classes.searchButton}
          sx={{ textTransform: "lowercase" }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchComp;
