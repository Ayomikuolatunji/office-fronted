import React from 'react'
import styled from "styled-components"

export default function RegisterCompany() {
  return (
    <ContainerDiv>
      <div className="left-div">

      </div>
      <div className="right-div">

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
        background-image: url(/public/pexels-lisa-fotios-1957478.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }

`