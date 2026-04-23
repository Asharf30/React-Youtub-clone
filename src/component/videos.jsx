import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Videocard from "./Videocard";
import ChannelCard from "./ChannelCard";
function Videos({ videos }) {
  return (
    <Stack
      sx={{
        justifyContent: "flex-start",
        gap: 2,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {videos.map((item, index) => (
        <Box key={index} sx={{ color: "white" }}>
          {item.id.videoId && <Videocard video={item} />}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
