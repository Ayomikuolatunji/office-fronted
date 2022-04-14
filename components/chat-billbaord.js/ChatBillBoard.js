import React from 'react'
import { useSelector } from 'react-redux'
import { ChatBillDiv } from '../../styled-compnent/chat'


export default function ChatBillBoard() {
  const mainUser=useSelector(state=>state.users.user)


  return (
    <>
       <ChatBillDiv>
          <h1>Hey,  <span>{mainUser?.mainUser?.user.username.toUpperCase()}</span> welcome</h1>
          <p>Select a chat or report to the group</p>
      </ChatBillDiv>  
    </>
  )
}

