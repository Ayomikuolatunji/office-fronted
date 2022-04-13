import React from 'react'
import ChatHeader from '../chat-header/ChatHeader'
import {SingleChatDiv} from "../../styled-compnent/chat"
import ChatInput from '../message-input/ChatInput'
import MessageBody from '../message-body/MessageBody'
import { useSelector } from 'react-redux';
import { sendChatApi } from '../../api/chat-api'



export default function SingleChat() {
  const message=useSelector(state=>state.users.message)
  console.log("hey",message)


  return (
    <>
      <SingleChatDiv>
          <ChatHeader/>
          <div className="message">
            <MessageBody/>
          </div>
          <div className="message-input">
            <ChatInput/>
          </div>
      </SingleChatDiv>
    </>
  )
}


