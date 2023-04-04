import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  let maxHeigth;
  if (window.innerHeight <= 800){
    maxHeigth = window.innerHeight

  }

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videoCollections = collection(db, "Videos");
    const videoSnapshot = await getDocs(videoCollections);
    const videosList = videoSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeigth + "px"}}>
      <div className="appVideos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
