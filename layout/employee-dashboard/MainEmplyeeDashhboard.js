import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmployeeData } from '../../redux/employee/employeeInfoSlice'
import styled from "styled-components"
import Sidebar from "./Sidebar"
import Main from "./Main"




export default function MainEmplyeeDashhboard() {
    const dispatch=useDispatch()
  

    useEffect(()=>{
        dispatch(getEmployeeData())
    })
  return (
    <ContainerDiv>
        <InnerDiv>
             <Sidebar/>
             <Main/>
        </InnerDiv> 
    </ContainerDiv>
  )
}


const ContainerDiv=styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
   background-color: #131342;
   
`

const InnerDiv=styled.div`
    width: 80vw;
    height: 70vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    @media(max-width:500px){
        width: 100%;
        height: 100vh;
    }
`