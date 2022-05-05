import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"


export default function Main() {
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)

  return (
    <MainDiv>
       <div className='welcome text-center w-[70%] mx-auto'>
           <p className='text-2xl'>Welcome <span className='text-blue-500 text-3xl'>{employeeData.username}</span> to onlineoffice where you connect to current working space</p>
           <h5>Your are recentyly not under any company</h5>
           <h6>You can join your company with the compnay Id sent to you from your company.</h6>
       </div>
    </MainDiv>
  )
}
const MainDiv=styled.div`
    width: 80%;
    background-color: gainsboro;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
