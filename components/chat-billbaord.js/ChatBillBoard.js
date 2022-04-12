import React from 'react'
import styled from "styled-components"
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


const ChatBillDiv=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  font-weight: bolder;
  font-size: 2rem;

  h1{
      span{
          color: purple;
      }
  }
`