import React, { useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillWechat } from "react-icons/ai";
import MessageInput from '../components/ChatPlatForm/MessageInput';
import './ChatPlatform.css'
import io from 'socket.io-client';
import AllMessages from '../components/ChatPlatForm/AllMessages';
import { useParams } from 'react-router';
import Themebtn from '../components/ChatPlatForm/Themebtn';
import { ThemeContext } from '../components/Themecontext';

let socket;

const ChatPlatform = () => {

const {darkmode, setdarkmode}= useContext(ThemeContext);
const handleTheme = ()=>{
  setdarkmode(!darkmode)
}

// go back leaving
const navigate = useNavigate();

//time
const min = `${new Date().getHours()}:${new Date().getMinutes()}` ;


  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const params = useParams();

  useEffect(() => {
    const { userName, roomId } = params;

    socket = io('http://localhost:5000');

    setUserName(userName);
    setRoomId(roomId);

    socket.emit('join', { userName, roomId}, (err) => {
    
    });
  }, [params]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });


  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }

     

    
  };

  return (
    <>
      <section className='msger'>
        <header className='msger-header'>
          <div className=' msger-header-title'>  
          <span ><AiFillWechat size={30}/></span>
           <span>{roomId}</span>
         
          </div>
          <div className=' msger-header-title'>
            <span onClick={handleTheme}><Themebtn/></span>
            <button onClick={() => navigate(-1)} >
              Leave
            </button>
          </div>
        </header>
      {/*   <div >toggle check</div> */}
      <div className={darkmode?"scroll":"scroll-black"}> 
       <AllMessages messages={messages} userName={userName} time={min}
        /></div>
      
        <MessageInput
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </section>
    </>
  );
};

export default ChatPlatform;
