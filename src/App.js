import axios from "./axios";
import React, { useEffect, useState } from "react";
import './App.css';
import Video from './Video';

function App() {

  const [videos, setVideos] = useState([])
  useEffect(()=>{
    async function fetchPosts (){
      const response = await axios.get("/v2/posts")
      setVideos(response.data)
      
      return response;   

    }
    fetchPosts()

    console.log(videos)

  },[])

  return (
    <div className="app">      
    
    <div className="app__videos">
      {videos.map(({url,channel,decription,song,likes,messages,shares})=>(
        <Video
        url={url}
        channel={channel} 
        decription={decription}
        song={song}        
        likes={likes}
        messages={messages}
        shares={shares}
        
        />
      ))}

      {/* <Video url="https://static.videezy.com/system/resources/previews/000/017/939/original/ICON-VERSION7.mp4"
      channel="React_2020" 
      decription="Knowledge to be Known" 
      song="99 problems but React is not one"
      likes={100}
      messages={50}
      shares={40}
      />
      <Video url="https://static.videezy.com/system/resources/previews/000/017/941/original/ICON-VERSION9.mp4"
      channel="React_2020" 
      decription="Knowledge to be Known" 
      song="99 problems but React is not one"
      likes={200}
      messages={20}
      shares={120}
      /> */}
      

    </div>     
     
    </div>
  );
}

export default App;
