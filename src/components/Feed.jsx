import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Video } from "./index";
import { fetchFromAPI } from "../utils/apis";
import { useEffect, useState } from "react";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  const getCategory = (searchParams) => {
    setSelectedCategory(searchParams);
  };
  return (
    <Stack direction={{ md: "row", xs: "column" }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 1 },
        }}
      >
        <SideBar getCategory={getCategory} />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          h2. Heading
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{ overflowY: "auto", overflowY: "auto", height: "90vh", flex: 2 }}
      >
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
          {selectedCategory} <span style={{ color: "red" }}>videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
