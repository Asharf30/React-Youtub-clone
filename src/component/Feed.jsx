// import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Sidebar from "./sidebar";
import Videos from "./Videos";
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
        ></Typography>
      </Box>
      <Box sx={{ p: 2, overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff", marginLeft: "10px" }}
        >
          New
          <span style={{ color: "#039499", marginLeft: "10px" }}>videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
}
// #039499
export default Feed;
