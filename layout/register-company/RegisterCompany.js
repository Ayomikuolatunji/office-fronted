import React from 'react'
import styled from "styled-components"

export default function RegisterCompany() {
  return (
    <ContainerDiv>
      <div className="left-div">

      </div>
      <div className="right-div bg-gradient-to-r from-purple-500 to-pink-500">
         
      </div>
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
      }

      .right-div{
          width: 50%;
          height: inherit;
      }

`