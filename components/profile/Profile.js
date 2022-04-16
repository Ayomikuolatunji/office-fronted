import React,{useState,useEffect} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FcLeft} from "react-icons/fc"
import { useSelector } from 'react-redux'
import { Avatar} from '@nextui-org/react';
import { Profilestyle } from '../../styled-compnent/chat'
import ChangePicture from './ChangePicture'
import Logout from "../logout/Logout"
import Username from '../username/Username';



export default function Profile() {
    const [currentUserName,setCurrentUserName]=useState("")
    const [currentUserImg,setCurrentUserImg]=useState("")
    const mainUser=useSelector(state=>state.users.user)
    const [openProfile,setOpenProfile]=useState(false)


      
  useEffect(()=>{
    if(mainUser){
      setCurrentUserImg(mainUser?.mainUser?.user.avartImage)
      setCurrentUserName(mainUser?.mainUser?.user.username)
    }
  },[mainUser])
    
  return (
     <>
       <div className={`${openProfile?"div absolute min-h-full bg-[#131342] left-0 top-0 right-0 z-[999]  duration-1000 transition-all ease-in-out block":"hidden"}`}>
            <div className={` flex left items-center p-3 pl-4`}>
            <FcLeft onClick={()=>setOpenProfile(!openProfile)} className={`text-4xl cursor-pointer  duration-1000 transition-all ease-out inline`}/>
              <h1 className='text-xl ml-[29px]'>profile page</h1>
            </div>
            <div className="change-profile-picture">
                <ChangePicture currentUserImg={currentUserImg}/>
            </div>
            <div className="change-username">
                 <Username/>
            </div>
            <div className="change-password">

            </div>
            <div className="change-email">

            </div>
            <div className="logout flex items-center absolute bottom-0 right-0 mr-16">
              <Logout/>
            </div>
        </div>
        <Profilestyle className="currentUser">
            <div className="avatar"> 
                <Avatar src={`${currentUserImg}`} alt="avatar"
                    onClick={()=>setSelectedChat(index)}
                    />
                <div className="userName">
                    <h1>{currentUserName.toUpperCase()}</h1>
                </div>
            </div>
            <GiHamburgerMenu
              className='cursor-pointer text-3xl'
              onClick={()=>setOpenProfile(!openProfile)}
            />
        </Profilestyle>
    </>
  )
}
