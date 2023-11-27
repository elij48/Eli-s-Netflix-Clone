import React, { useState, useEffect } from "react";
import axios from "../axios";
import ReactPlayer from "react-player";
import "./Banner.css";
import playsvg from "../assets/triangle-play.svg";
import unmutesvg from "../assets/unmute-svgrepo-com.svg";
const base_vidURL = "https://www.youtube.com/watch?v=";

interface Props {
  title: string;
  fetchVidUrl: string;
  fetchDeetsUrl: string;
}

function Banner({ title, fetchVidUrl, fetchDeetsUrl }: Props) {
  // get video data or the youtube id from the api
  const [video, setVideo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchVidUrl);
      setVideo(request.data.results[12].key);
      return request;
    }
    fetchData();
  }, [fetchVidUrl]);

  // get video detail
  const [details, setDetails] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchDeetsUrl);
      setDetails(request.data.overview);
      return request;
    }
    fetchData();
  }, [fetchDeetsUrl]);

  return (
    <header className="player-wrapper">
      <ReactPlayer
        className="player"
        playing={true}
        loop={false}
        volume={0}
        url={base_vidURL + video}
        width="100%"
        height="100%"
      />
      <div className="video-details">
        <div className="info-wrapper">
          <span className="vid-title">{title}</span>

          <button className="play-button">
            <img src={playsvg} width="45px" />
            <span>Play</span>
          </button>
        </div>
        <div className="info-wrapper">
          <p className="vid-summary">{details}</p>
        </div>
        <div className="info-wrapper">
          <button className="unmute-vid">
            <img src={unmutesvg} width="45px" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
