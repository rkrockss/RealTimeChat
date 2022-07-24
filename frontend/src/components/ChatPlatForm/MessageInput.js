
import './MessageInput.css'
import { BsEmojiSmile } from "react-icons/bs";
import Emoji from './Emoji';
import { useState } from 'react';




const MessageInput = ({ sendMessage, setMessage, message }) => {
  const [picker1, setpicker1] = useState(false)

  return (
    <form className='msger-inputarea'>
     {picker1? <div className='emojipicker'> <Emoji/></div>:null}
   
    <div onClick={()=>setpicker1(!picker1)} className='emojibtn'> <BsEmojiSmile size={17}/></div>
      <input
        type='text'
        className='chat-input'
        placeholder='Send Message...'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button
        type='submit'
        className='send-btn'
        onClick={(e) => sendMessage(e)}
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
