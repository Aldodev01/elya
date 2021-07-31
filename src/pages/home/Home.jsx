import "./Home.css";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import hi from "../../assets/hi.png";
import hiya from "../../assets/lolo.mp4";
import VideoFooter from "../../components/VideoFooter";

const Home = () => {
  const alertBtn = () => {
    alert("Hai Ria 🙃");
    alert("Kamu cantik 😋");
    alert("Semangat ya Belajarnya 😇");
    alert("Tapi Sayang 😄");
    alert("Gw cuma bisa nyemangatin dari disini 😞");
    alert("Dan mengaguminya 🧐");
    alert("Semangat pokoknya 🤭");
    alert("Jangan kasih kendor 🤫");
  };

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
    <div className="home">
      <div className="videoHome">
        <video
          src={hiya}
          onClick={onVideoPres}
          autoPlay
          ref={videoRef}
          className="videoPlayer"
          loop
        ></video>
      </div>

      <div className="apaanKe">
        <h3>Pencet ini, bakal muncul orang</h3>
      </div>
      <div className="footer">
        <h1>Ria</h1>

        <Link to="/video">
          <IconButton>
            <div className="homeBtn" onClick={alertBtn}>
              <p>Pencet ini da 👻</p>
            </div>
          </IconButton>
        </Link>
      </div>
    </div>

    //   return (
    //     <div className="home">
    //       <div className="videoWrap">
    //         <video
    //           src={hiya}
    //           loop
    //           id="myVideo"
    //           autoPlay
    //           className="videoBack"
    //         ></video>
    //       </div>

    //       <h1>Ara</h1>
    //       <img src={hi} alt="loginOrang" className="homeHi" />

    //       <Link to="/video">
    //         <IconButton>
    //           <button className="homeBtn" onClick={alertBtn}>
    //             <h3>Pencet ini da.. ^.^</h3>
    //           </button>
    //         </IconButton>
    //       </Link>
    //     </div>
  );
};

export default Home;
