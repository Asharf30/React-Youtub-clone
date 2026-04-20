import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

import { logo } from "../ulites.jsx/constants";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
    
      p={2}
      sx={{position : "sticky", top: 0, justifyContent: "space-between" ,}}
  
    >

    </Stack>
  );
}

export default Navbar;
