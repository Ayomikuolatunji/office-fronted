import React,{useEffect, useState} from 'react'
import styled from "styled-components"

export default function Contact({contacts,currentUser}) {
  const [currentUserName,setCurrentUserName]=useState("")
  const [currentUserImg,setCurrentUserImg]=useState("")
  const [selectedChat,setSelectedChat]=useState(undefined)

  useEffect(()=>{
    if(currentUser){
        setCurrentUserImg(currentUser.user.avartImage)
        setCurrentUserName(currentUser.user.username)
    }
  },[currentUser])


  const changeCurrentChat=(index,contact)=>{

  }

  return (
    <>
      <ContactDiv>
           <div className="brand">
               <h1>logo</h1>
           </div>
           <div className="contacts">
               {contacts.map((contact,index)=>{
                  return (
                      <div key={index}  className={`contact ${selectedChat===index? "selected":" "}`} >
                            <img src={`data:image/svg+xml;base64,${contact.avartImage}`} alt="avatar"
                       onClick={()=>setSelectedChat(index)}
                       />
                       <div className="user-name">
                           <h1>{contact.username}</h1>
                       </div>
                      </div>
                  )
               })}
           </div>
           <div className="current-user">
                <div className="avatar"> 
                  <img src={`data:image/svg+xml;base64,${currentUserImg}`} alt="avatar"
                       onClick={()=>setSelectedChat(index)}
                       />
                    <div className="user-name">
                        <h1>{currentUserName}</h1>
                    </div>
                </div>
           </div>
       </ContactDiv>
    </>
  )
}
 
const ContactDiv=styled.div`
  color: #fff;
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;

  .brand{
      h1{
          font-size: 30px;
          text-align: center;
      }
  }

  .contacts{
       display: flex;
       gap: 0.8rem;
       flex-direction: column;
       overflow: auto;
       .contact {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         cursor: pointer;
         transition: 0.5s ease-in-out all;
         img{
           height: 3rem;
           width: 3rem;
         }
       }
       .selected{
          border: 0.4rem solid #997af0;
          background-color: green;          
         }
     }
`