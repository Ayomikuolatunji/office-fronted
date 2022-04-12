import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
export default function SingleChat({currentUser}) {


  const currentChat=useSelector(state=>state.users.chat)
  console.log(currentChat)


  return (
    <>
      <SingleChatDiv>
          <div className="chat-header">
              <div className="user-detaiils">
                  <div className="avatar">
                      
                  </div>
              </div>
          </div>
      </SingleChatDiv>
    </>
  )
}


const SingleChatDiv=styled.div`


`