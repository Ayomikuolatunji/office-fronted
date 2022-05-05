import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components"

export default function Profile() {
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
  console.log(employeeData);
  return (
    <ProfileContainer>
        <div className="general w-[40%] p-2">
            <Image src={employeeData.avartImage} width={200} height={200} alt={employeeData.username}/>
        </div>
         <div className="about">

         </div>
    </ProfileContainer>
  )
}

const ProfileContainer=styled.div`
    display: flex;
    width: 100%;
    height: inherit;
`


