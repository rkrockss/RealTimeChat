import React, { useState } from 'react';
import './Message.css'
const Message = ({ message: { textContent, user }, userName ,min1 }) => {
  let sentByThisUser = false;

  const trimmedUserName = userName.trim().toLowerCase();

  if (user === trimmedUserName) {
    sentByThisUser = true;
  }

const min2 =min1;

  return (
    <>
    
    <div>
   
    {!sentByThisUser ? (
        <div className='msg left-msg'>
          
            <div className='msg-info'>
              <div className='msg-info-name'>
                <u>{user}</u>
           
            </div>
            <div className='msg-text'>{textContent}</div>
            <div className='msg-time'>{min2}</div>
          </div>
        </div>
      ) : (
        <div className='msg right-msg'>
          
            <div className='msg-info'>
              <div className='msg-info-name'>
                <u>{user}</u>
              </div>
        

            <div className='msg-text'>{textContent}</div>
            <div className='msg-time'>{min2}</div>
          </div>
        </div>
      )}

      

    </div>
      
    </>
  );
};

export default Message;
