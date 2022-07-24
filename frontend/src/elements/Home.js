import React, { useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');

  return (
    <>
      <div className='content-join-form'>
        <span>Real Time Chat App</span>
        <input
        placeholder='Enter Your Name'
          type='text'
          className='inputBox'
          onChange={(e) => setUserName(e.target.value)}
        />
     
       
        <input
        placeholder='Enter Your Roon Id'
          type='text'
          className='inputBox'
          onChange={(e) => setRoomId(e.target.value)}
        />
        <Link to={userName && roomId ? `/chatting/${roomId}/${userName}` : ''}>
          <button type='submit' className='btn-join'>
            Join
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
