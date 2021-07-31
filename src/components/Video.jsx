import "./Video.css";
import { useRef, useState } from "react";
import React from "react";
import elya from "../assets/ss.mp4";
import VideoFooter from "./VideoFooter";

const Video = () => {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPres = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        src={elya}
        onClick={onVideoPres}
        ref={videoRef}
        className="videoPlayer"
        loop
      ></video>

      <VideoFooter />
    </div>
  );
};

export default Video;
