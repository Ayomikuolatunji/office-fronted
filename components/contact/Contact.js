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
                      <div key={index}  className={`avatar ${selectedChat===index? "selected":" "}`} >

                      </div>
                  )
               })}
           </div>
       </ContactDiv>
    </>
  )
}
 
const ContactDiv=styled.div`
  color: #fff;

`