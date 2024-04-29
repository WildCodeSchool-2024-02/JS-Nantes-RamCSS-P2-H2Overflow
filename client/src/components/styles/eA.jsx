import { useState } from "react";
import "./eA.css";

function VideoPlayer() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <div className="eastereggs">
      <button className="easter" type="button" onClick={toggleVideo}>
        .
      </button>

      {isVideoOpen && (
        <div>
          <iframe
            className="frame"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/s9oQRKsROF8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
