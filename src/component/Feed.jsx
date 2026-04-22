import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Sidebar from "./sidebar";
function Feed() {
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }} gap={2}>
      <Box
        sx={{
          height: { xs: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          variant="body2"
          className="copyright"
          sx={{ marginTop: "1px", color: "#fff" }}
        >
        </Typography>
      </Box>
      <Box>
        <Typography>
          <span style={{color:"#FC1503"}}>videos</span>
        </Typography>
      </Box>
    </Stack>
  );
}

export default Feed;
