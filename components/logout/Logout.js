import React from 'react'
import styled from "styled-components"
import {GoSignOut} from "react-icons/go"
import { useRouter } from 'next/router'



export default function Logout() {
  const router=useRouter()

  const LogoutFunc=()=>{
       if(localStorage.getItem("office-user") || localStorage.getItem("userId")) {
           localStorage.removeItem("office-user")
           localStorage.removeItem("userId")
       }
       window.location.reload()
       router.push("/login")
  }

  return (
    <>
     <button onClick={LogoutFunc} className="flex items-center m-3">
         <GoSignOut  className="text-[40px] text-white"/>
         <span className='ml-3'>Logout</span>
     </button>
    </>
  )
}

const LogoutDiv=styled.div`
   
`
