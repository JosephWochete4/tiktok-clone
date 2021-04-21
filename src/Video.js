import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url,channel, decription, song, likes, shares, messages}) {
    const [playing, setPlaying]=useState(false)

    const videoRef = useRef(null)

    const handleVideoPlay=()=>{

        if(playing){
            videoRef.current.pause()
            setPlaying(false)

        }else{videoRef.current.play()
        setPlaying(true)
    }
    }
   
    return (
        <div className="video">
            <video
            onClick={handleVideoPlay}
            className="video__player"
            loop
            ref={videoRef}
            src={url}></video>

            {/* https://static.videezy.com/system/resources/previews/000/017/941/original/ICON-VERSION9.mp4 */}
        
        {/* Video footer */}
        <VideoFooter channel={channel} decription={decription} song={song} />
        {/* Video Sidebar */}
        <VideoSidebar likes={likes} messages={messages} shares={shares}/>
        </div>
    );
}

export default Video;
