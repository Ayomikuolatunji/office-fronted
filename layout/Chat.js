import styled from 'styled-components'
import React from 'react'



export default function Chat() {
  return (
    <ChatContainer>
        <div className="container">

        </div>
    </ChatContainer>
  )
}


const ChatContainer=styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 1rem;
     justify-content: center;
     background-color: #131342;
    
    .container{
         gap: 2rem;
         background-color: #00000076;
         padding: 2rem 3rem;
         width: 85vw;
         height: 85vh;
         display: grid;
         grid-template-columns: 25% 75%;

         @media (max-width:1080px) and (min-width:720px){
           
         }
    }
`