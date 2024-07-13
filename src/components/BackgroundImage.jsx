import React from 'react'
import background from "../assets/login.jpg";
import style from "styled-components"

export default function BackgroundImage() {
  return (
    <Container>
        <img src={background} alt="background"/>
    </Container>
  )
}

const Container = style.div`
    height: 100vh;
    width: 100vw;
    img {
        height: 100vh;
        width: 100vw;
    }
`;
