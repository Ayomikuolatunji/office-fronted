import React,{useState,useEffect} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { useSelector } from 'react-redux'
import { Profilestyle } from '../../styled-compnent/chat'



export default function Profile() {
    const [currentUserName,setCurrentUserName]=useState("")
    const [currentUserImg,setCurrentUserImg]=useState("")
    const mainUser=useSelector(state=>state.users.user)


      
  useEffect(()=>{
    if(mainUser){
      setCurrentUserImg(mainUser?.mainUser?.user.avartImage)
      setCurrentUserName(mainUser?.mainUser?.user.username)
    }
  },[mainUser])
    
  return (
     <>
        <Profilestyle className="currentUser">
            <div className="avatar"> 
                <img src={`data:image/svg+xml;base64,${currentUserImg}`} alt="avatar"
                    onClick={()=>setSelectedChat(index)}
                    />
                <div className="userName">
                    <h1>{currentUserName.toUpperCase()}</h1>
                </div>
            </div>
            <GiHamburgerMenu
              className='cursor-pointer text-3xl'
            />
        </Profilestyle>
    </>
  )
}
