import React from 'react'
import styled from "styled-components"
import { ChatBillDiv } from '../../styled-compnent/chat'


export default function ChatBillBoard({currentUser:{user}}) {


  return (
    <>
       <ChatBillDiv>
         
          <h1>Hey,  <span>{user?.username.toUpperCase()}</span> welcome</h1>
          <p>Select a chat or report to the group</p>
      </ChatBillDiv>  
    </>
  )
}

