import React, { useEffect,useState } from "react";
import ReactPlayer from "react-player";
import "./Youtube.css";
import {BsArrowLeft} from "react-icons/bs"
import { useLocation, useNavigate } from "react-router-dom";
const Yotube = () => {
  const location = useLocation();
  const [videoid,setvideoid] = useState("");
  const navigate = useNavigate();

   console.log("videoID: ", location.state.name);
   const query=location.state.name;
   //var ans;
   useEffect(()=>{
    async function getapi(query) {
   
      // Storing response
      const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query
      .split(" ")
      .join("%20")}%20trailer&maxResults=1&key=AIzaSyBN6p2qVYqLFJvWh63Jy8c2Hijo0TFMLT0`;

      const response = await fetch(fetchURL);
     
      // Storing data in form of JSON
      var data = await response.json();
     // console.log("Fetch Trailer result: ", data.items[0].id.videoId);
      const videoid=data.items[0].id.videoId;
      console.log("video id is ",videoid);
      setvideoid(videoid);
      //var ans=videoid;
      //return videoid;
      
    }
    getapi(query);
   },[]);
    
    console.log(videoid);
    
  
  return (
    <div className="Youtube">
      
      <BsArrowLeft className="arrow" onClick={()=>navigate(-1)}/>
      <ReactPlayer
        height={"448px"}
        width={"796px"}
        marginTop={"10px"}
        controls={true}
        playing={true}
        url={"https://www.youtube.com/watch?v=" + videoid}
        style={{
          position: "relative",
             //left: "50vw",
            //right: "50vw",
            // transform: "translateX(-50%)",
          //marginTop:"50px",
          marginLeft: "125px",
          align: "center",
        }}
      />
    </div>
  );
};

export default Yotube;
