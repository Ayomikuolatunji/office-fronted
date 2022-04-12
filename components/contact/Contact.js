import React,{useEffect, useState} from 'react'
import styled from "styled-components"

export default function Contact({contacts,currentUser}) {
  const [currentUserName,setCurrentUserName]=useState("")
  const [currentUserImg,setCurrentUserImg]=useState("")
  const [selected,setSelected]=useState(undefined)
   console.log(currentUser)
  useEffect(()=>{
    if(currentUser){
        setCurrentUserImg(currentUser.user.avartImage)
        setCurrentUserName(currentUser.user.username)
    }
  },[currentUser])
  return (
    <ContactDiv>
        <img src={currentUserImg} alt="user" />
        <h1>{currentUserName}</h1>
    </ContactDiv>
  )
}
 
const ContactDiv=styled.div`
  color: #fff;

`