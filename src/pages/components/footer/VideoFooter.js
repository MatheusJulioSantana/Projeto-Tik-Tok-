import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name, description, music}) {
  return (
    <div className="Videofooter">
      <div className="VideoFooterText">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="VideoFooterMusic">
          <MusicNoteIcon className="VideoFooterIcon" />
          <div className="VideoFooterMusicText">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="VideoFooterRecord"
        alt="imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
