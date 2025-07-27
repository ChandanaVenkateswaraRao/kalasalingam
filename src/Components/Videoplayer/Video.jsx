import React, { useRef } from 'react'
import './Video.css'
import video from '../../assets/video.mp4'

const Video = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const videoRef = useRef(null); // add this

  const closePlayer = (e) => {
    if (e.target === player.current) {
      // pause the video when closing
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // optional: reset to beginning
      }
      setPlayState(false);
    }
  }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video ref={videoRef} src={video} autoPlay muted controls />
    </div>
  )
}

export default Video
  