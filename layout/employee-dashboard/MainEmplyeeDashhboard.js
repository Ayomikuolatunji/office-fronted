import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmployeeData } from '../../redux/employee/employeeInfoSlice'
import styled from "styled-components"




export default function MainEmplyeeDashhboard() {
    const dispatch=useDispatch()
  

    useEffect(()=>{
        dispatch(getEmployeeData())
    })
  return (
    <ContainerDiv>
             
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


`