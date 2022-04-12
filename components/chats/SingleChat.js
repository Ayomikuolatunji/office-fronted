import React from 'react'
import ChatHeader from '../chat-header/ChatHeader'
import {SingleChatDiv} from "../../styled-compnent/chat"
import ChatInput from '../message-input/ChatInput'
import MessageBody from '../message-body/MessageBody'



export default function SingleChat() {

  const handlemessage=async(msg)=>{

  }

  return (
    <>
      <SingleChatDiv>
          <ChatHeader/>
          <div className="message">
            <MessageBody/>
          </div>
          <div className="message-input">
            <ChatInput handlemessage={handlemessage}/>
          </div>
      </SingleChatDiv>
    </>
  )
}


