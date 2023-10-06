import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  videos: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={snippet?.title}
          sx={{
            width: 358,
            height: 180,
            backgroundSize: "cover",
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "#1E1E1E",
            height: "106px",
          }}
        >
          <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "#fff" }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60),
                }}
              />
              ...
            </Typography>
          </Link>
          <Link
            to={
              snippet.channelId
                ? `channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="body2" sx={{ color: "gray", marginTop: 1 }}>
              {snippet?.channelTitle.slice(0, 60) ||
                demoChannelTitle.slice(0, 50)}
              <CheckCircle sx={{ fontSize: 14, ml: 1 }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
