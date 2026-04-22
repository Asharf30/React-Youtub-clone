import React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Search from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        boxShadow: "none",
        border: "1px solid #e3e3e3",
        pl: 2,
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
        sx={{ p: "10px", color: "#03A9F499" }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
