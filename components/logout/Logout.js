import React from 'react'
import styled from "styled-components"
import {BiPowerOff} from "react-icons/bi"
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
     <button>
         <BiPowerOff onClick={LogoutFunc} className="text-3xl text-purple-200"/>
     </button>
    </>
  )
}

const LogoutDiv=styled.div`
   
`
