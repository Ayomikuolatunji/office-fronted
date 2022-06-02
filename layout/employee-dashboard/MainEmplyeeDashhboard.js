import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmployeeData } from '../../redux/employee/employeeInfoSlice'
import styled from "styled-components"
import Sidebar from "./sidebar/Sidebar"
import { Header } from './Header/Header'


export default function MainEmplyeeDashhboard({children}) {
    const dispatch=useDispatch()
  
    useEffect(()=>{
        dispatch(getEmployeeData())
    },[dispatch])
    
  return (
    <ContainerDiv>
        <Header />
        <InnerDiv>
            <div className='SidebarLayer'>
            <Sidebar/>
            </div>
            <main>
              {children}
            </main>
        </InnerDiv> 
    </ContainerDiv>
  )
}


const ContainerDiv=styled.div`
   /* display: flex; */
   display: block;
   position: relative;
   width: 100%;
`

const InnerDiv=styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    /* margin-top: 1rem; */
    /* display: flex; */
    /* justify-content: space-between;
    align-items: center;
    background-color: #fff; */
    /* background-color: #d9d9d9; */

    .SidebarLayer {
        position :  relative;
         width : 15%;

    }

    main{
        width: 84%; 
        /* display: flex; */
        background-color: #c0caad;
        margin: auto;
        /* justify-content: center;
        align-items: center;
        height: 100%;
        position: relative; */
    }
    @media(max-width:500px){
        width: 100%;
        height: 100vh;
    }
`