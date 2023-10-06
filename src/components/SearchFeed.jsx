import { Box, Typography } from "@mui/material";
import { Video } from "./index";
import { fetchFromAPI } from "../utils/apis";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log(searchTerm);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err));
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", overflowY: "auto", height: "90vh", flex: 2 }}
    >
      <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
        Search Result for: <span style={{ color: "red" }}>{searchTerm}</span>{" "}
        videos
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};

export default SearchFeed;
