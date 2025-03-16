import React, { useEffect } from 'react';

const Poster = () => {
  
  return (
    <div className='poster_sec'>
      <video
        id='school_video'
        className="video_style"
        src="https://images.vardaanschool.org/videos/vardaan_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  )
}

export default Poster
