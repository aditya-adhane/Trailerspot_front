import React from 'react'
import {BsArrowLeft} from "react-icons/bs"
import video from "../assets/video.mp4"
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function Player() {
    const navigate = useNavigate();
  return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft style={{marginLeft:"15px", height:"150px", width:"100px" , marginTop:"100px"}} onClick={()=>navigate(-1)}/>
            </div>
            <p align="center">
              <iframe height="480" width="800" align="center"
                src="https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1">
              </iframe>
            </p>
        </div>
    </Container>
  )
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      
    }
  }
`;
