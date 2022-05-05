import Link from 'next/link'
import React from 'react'
import styled from "styled-components"

export default function Sidebar() {
  const employeeCompanies=[{route:"/employee-dashboard/home", item:"Welcome"}, {route:"/employee-dashboard/companies", item:"companies"} ]

  return (
    <SidebaarDiv>
         {
            employeeCompanies.map((company,index)=>{
                return <div key={index}>
                    <h5 className='text-black'>
                    <Link href={company.route}>
                      <a> {company.item}</a>
                    </Link>
                    </h5>
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
    color: green;
`