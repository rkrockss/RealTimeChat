
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatPlatform from './elements/ChatPlatform';

import Home from './elements/Home';

import React from 'react'

const App = () => {

 /* admin mesage seprate
  emojis implementation
  showing time
  */

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chatting/:roomId/:userName' element={<ChatPlatform />} />
    </Routes>
  </Router>
  )
}

export default App
