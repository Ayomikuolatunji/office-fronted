import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmployeeData } from '../../redux/employee/employeeInfoSlice'
import styled from "styled-components"
import Sidebar from "./sidebar/Sidebar"
import { Header } from './Header/Header'
import { Copyright } from '@mui/icons-material'


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
        <Footer> 
        <p>All right reserved <Copyright /></p>
        </Footer> 
    </ContainerDiv>
  )
}


const ContainerDiv=styled.div`
   display: block;
   position: relative;
   width: 100%;
`

const InnerDiv=styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    background : #94A8B6;

    .SidebarLayer {
        position :  relative;
         width : 15%;

    }

    main{
        width: 100%; 
        background-color: #F1F5F8;
        margin: auto;
        margin-bottom : 0.45em;
        min-height: calc(100vh - 8rem);
    }
    @media(max-width:500px){
        width: 100%;
        height: 100vh;
    }
`

const Footer = styled.footer `
  width: 75%;
  text-align: center;
  height: 100%;
  position: relative;
  margin: auto;
  p {
    margin: 0;
    padding-top: 0.45em;
  }
  
`