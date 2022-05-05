import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"


export default function Main() {
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
   console.log(employeeData);

  return (
    <MainDiv>
       <div>
           main
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
