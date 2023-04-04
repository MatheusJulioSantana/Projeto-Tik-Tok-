import React, { useState } from "react";
import "./VideoSideBar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSideBar({likes, messages, shares}) {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => setLiked(!liked);

  return (
    <div className="VideoSideBar">
      <div className="VideoSideBarOptions" onClick={toggleLiked}>
        {liked ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large" />}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="VideoSideBarOptions">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="VideoSideBarOptions">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
