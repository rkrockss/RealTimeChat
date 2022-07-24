import React from 'react';
import Message from './Message';
import './AllMessages.css'
import ScrollToBottom from 'react-scroll-to-bottom';

const AllMessages = ({ messages, userName,time }) => {
  return (
    <main className='chat-box'>
      <ScrollToBottom className='scroll2' >
    
        {messages.map((message, i) => (
          <Message key={i} message={message} userName={userName} min1={time}/>
        ))}
      </ScrollToBottom>
    </main>
  );
};

export default AllMessages;
