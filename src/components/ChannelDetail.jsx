import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/apis";
import { Box } from "@mui/material";
import { ChannelCard, Video } from "./index";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannel(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "rgb(0,3,36)",
            backgroundColor: "#0093E9",
            backgroundImage:
              "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channel={channel} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Video videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
