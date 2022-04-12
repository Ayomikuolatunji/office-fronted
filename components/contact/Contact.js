import React,{useEffect, useState} from 'react'
import styled from "styled-components"


export default function Contact({contacts,currentUser}) {
  const [currentUserName,setCurrentUserName]=useState("")
  const [currentUserImg,setCurrentUserImg]=useState("")
  const [selectedChat,setSelectedChat]=useState(undefined)
  const [cureenChat,setCurrentChat]=useState("")

  useEffect(()=>{
    if(currentUser){
        setCurrentUserImg(currentUser.user.avartImage)
        setCurrentUserName(currentUser.user.username)
    }
  },[currentUser])


  const changeCurrentChat=(index,contact)=>{
     setSelectedChat(index) 
      
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
                      <div key={index}  className={`contact ${selectedChat===index? "selected":" "}`}
                     onClick={()=>changeCurrentChat(index,contact)}
                      >
                         <img src={`data:image/svg+xml;base64,${contact.avartImage}`} alt="avatar"
                       onClick={()=>setSelectedChat(index)}
                       />
                       <div className="userName">
                           <h1>{contact.username}</h1>
                       </div>
                      </div>
                  )
               })}
           </div>
           <div className="currentUser">
                <div className="avatar"> 
                  <img src={`data:image/svg+xml;base64,${currentUserImg}`} alt="avatar"
                       onClick={()=>setSelectedChat(index)}
                       />
                    <div className="userName">
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
       ::-webkit-scrollbar{
           width: 0.2rem;
           &-thumb{
            background-color: #ffffff39;
            width: 0.1rem;
            border-radius: 1rem;
           }
       }
       .contact {
         display: flex;
         align-items: center;
         cursor: pointer;
         transition: 0.5s ease-in-out all;
         width: 95%;
         min-height: 5rem;
         background-color: #ffffff39;
         gap: 0.76rem;
         img{
           height: 3rem;
         }
         .userName{
             h1{
                color: #fff;
             }
         }
       }

       .selected{
          border: 0.4rem solid #997af0;
          background-color: green;          
         }
     }

     .currentUser{
         background-color: #997af0;
         display: flex;
         justify-content:center;
         align-items: center;

         .avatar{
             display: flex;
             align-items: center;
             gap: 1rem;
             img{
                 height: 4rem;
                 max-inline-size: 100%;
             }
         }
         .userName{
             color: #fff
         }
         @media (max-width:1080px) and (min-width:720px){
              gap: 1rem;
         }
     }
`