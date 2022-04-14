import React from 'react'
import ChatHeader from '../chat-header/ChatHeader'
import {SingleChatDiv} from "../../styled-compnent/chat"
import ChatInput from '../message-input/ChatInput'






export default function SingleChat() {
 

  return (
    <>
      <SingleChatDiv>
        {/* single chat header */}
          <ChatHeader/>
          <div className="message">
          </div>
          <div className="message-input">
            <ChatInput/>
          </div>
      </SingleChatDiv>
    </>
  )
}


