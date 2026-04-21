import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

import { logo } from "../ulites.jsx/constants";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      direction="row"
      sx={{
        padding: 2,
        alignItems: "center",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        background: "#000",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
