import React from 'react'
import Banner from './pages/banner/Banner'
import Player from './pages/player/Player'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="/player" element={<Player />} />
    </Routes>
    </div>
  )
}

export default App
