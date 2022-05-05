import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmployeeData } from '../../redux/employee/employeeInfoSlice'
import styled from "styled-components"
import Sidebar from "./sidebar/Sidebar"





export default function MainEmplyeeDashhboard({children}) {
    const dispatch=useDispatch()
  

    useEffect(()=>{
        dispatch(getEmployeeData())
    })
  return (
    <ContainerDiv>
        <InnerDiv>
            <Sidebar/>
            <main>
              {children}
            </main>
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

    main{
        width: 80%;
        background-color: gainsboro;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;
    }
    @media(max-width:500px){
        width: 100%;
        height: 100vh;
    }
`