import React from 'react'
import styled from "styled-components"
import {GoSignOut} from "react-icons/go"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { logoutEmployee } from '../../redux/auth/employeSlice'



export default function Logout() {
  const router=useRouter()
  const dispatch=useDispatch()
  const isLoggedIn=useSelector(state=>state.employeeAuth.isLoggedIn)

  const LogoutFunc=()=>{
    if(isLoggedIn) {
        dispatch(logoutEmployee())
    }
    router.push("/login")
  }

  return (
    <>
     <button onClick={LogoutFunc} className="flex items-center my-3">
         <GoSignOut  className="text-[40px] text-white"/>
         <span className='ml-3'>Logout</span>
     </button>
    </>
  )
}

const LogoutDiv=styled.div`
   
`
