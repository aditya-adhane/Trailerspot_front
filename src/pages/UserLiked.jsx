import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {firebaseAuth} from "../utils/firebase-config"
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres, getUsersLikedMovies } from "../store";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";
import Card from "../components/Card";

  

export default function UserLiked() {
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email,setEmail] = useState(undefined);
    

    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setEmail(currentUser.email);
      } else navigate("/login");
    });

  

  useEffect(() => {
    if(email){
        dispatch(getUsersLikedMovies(email));
    }
  }, [email]);

  


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  
  return (
    <Container>
        <Navbar isScrolled={isScrolled}/>
        <div className="content flex column">
            <h1>My List</h1>
            <div className="grid flex">
                {movies.map((movie,index)=>{
                    return <Card movieData={movie} index={index} key={movie.id} isLiked={true}/>
                })}
            </div>
        </div>
    </Container>
  )
  
}

const Container = styled.div`
  .content {
    margin-right: 1rem;
    margin-top: 8rem;
    gap: 3rem;
    margin-left: 2rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
