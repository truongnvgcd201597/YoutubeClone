import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the search or submit logic here using the searchValue state
    console.log("Search submitted:", searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        color="error"
        aria-label="search"
        children={<SearchIcon />}
      />
    </Paper>
  );
};

export default SearchBar;
