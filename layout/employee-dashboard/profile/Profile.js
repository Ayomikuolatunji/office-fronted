import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components"
import {FcOldTimeCamera} from "react-icons/fc"

export default function Profile() {
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
  console.log(employeeData);
  return (
    <ProfileContainer>
        <div className="general w-[40%] border-1 border-gray shadow-md">
           <div className='relative w-[200px] h-[200px] self-center'>
                <Image src={employeeData.avartImage} alt={employeeData.username} layout='fill' className='rounded-[50%]'/>
                <FcOldTimeCamera className='text-5xl absolute bottom-0 right-0 mr-3'/>
           </div>
           <div className="username mt-3 bg-white" >
           <h2>Your name</h2>
           </div>
        </div>
         <div className="about">
             
         </div>
    </ProfileContainer>
  )
}

const ProfileContainer=styled.div`
    display: flex;
    width: 100%;
    padding-top: 30px;
    height: inherit;
`


