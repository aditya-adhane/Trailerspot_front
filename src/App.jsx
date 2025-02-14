import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Signup from './pages/Signup'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import UserLiked from './pages/UserLiked'
import Yotube from './pages/Yotube'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/player" element={<Player />}/>
        <Route exact path="/Yotube" element={<Yotube />}/>
        <Route exact path="/movies" element={<Movies />}/>
        <Route exact path="/tv" element={<TVShows />}/>
        <Route exact path="/mylist" element={<UserLiked/>}/>
        <Route exact path="/" element={<Netflix />}/>
      </Routes>
    </BrowserRouter>
  )
}