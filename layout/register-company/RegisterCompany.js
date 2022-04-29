import React from 'react'
import styled from "styled-components"
import RegisterBgImage from './RegisterBgImage'
import RegisterCompanyForm from './RegisterCompanyForm'

export default function RegisterCompany() {
  return (
    <ContainerDiv>
      <RegisterBgImage/>
      <RegisterCompanyForm/>
    </ContainerDiv>
  )
}


const ContainerDiv=styled.div`
    width:100%;
    height: 100vh;
    display: flex;

      .left-div{
        width: 50%;
        display: block;
        height: inherit;
        background-image: url(/pexels-lisa-fotios-1957478.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      background-attachment: fixed;
      }

      .right-div{
          width: 50%;
          height: inherit;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          div{
            width: 70%;
            margin-top: 10px;
            input{
             /* background: transparent; */
             padding: 1rem;
             border: 0.1rem solid gray;
             border-radius: 0.4rem;
             color: white;
             font-weight: bolder;
             width: 100%;
             font-size: 1rem;

             &:hover{
                 border: 1px solid #997af0;
                 outline: none;
             }
          } 
          }
      }

`