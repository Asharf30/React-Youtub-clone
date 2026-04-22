import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

import logo2 from "../images/logo_transparent3.png";
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
      }}
    >
      <Link to="/">
        <img src={logo2} alt="logo" height={45} style={{backgroundColor:"#0b1a2b"}} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
