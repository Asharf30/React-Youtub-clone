import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";

import {
  Navbar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./component";
function App() {
  
  return (
    
    <>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
          
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
