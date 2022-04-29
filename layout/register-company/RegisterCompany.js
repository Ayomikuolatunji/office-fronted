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
          .normal-input{
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
      button{
            background-color: #997af0;
            width: 100%;
            border-radius: 0.4rem;
            cursor: pointer;
            text-transform: uppercase;
            color: #fff;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: bold;
            color: #fff;
            border: none;
            transition: 0.5s ease-in-out;
            &:hover{
                background-color: #4e0eff; 
            }
         }
`