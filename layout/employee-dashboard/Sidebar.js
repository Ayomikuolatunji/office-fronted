import React from 'react'
import styled from "styled-components"

export default function Sidebar() {
  const employeeCompany=[".profile", "Companies", ]

  return (
    <SidebaarDiv>
         {
             employeeCompany.map((company,index)=>{
                <div key={index}>
                    <h1></h1>
                </div>
             })
         }
    </SidebaarDiv>
  )
}


const SidebaarDiv=styled.div`
    width: 20%;
    background-color: aliceblue;
    height: 100%;
`