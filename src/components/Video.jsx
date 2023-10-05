import { Box, Stack } from "@mui/material";
import React from "react";
import { ChannelCard, VideoCard } from "./index";

function Video({ videos }) {
  return (
    <Stack
      direction={"row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard videos={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Video;
