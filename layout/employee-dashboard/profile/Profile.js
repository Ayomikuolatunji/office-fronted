import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components"
import {FcOldTimeCamera} from "react-icons/fc"
import {FiEdit} from "react-icons/fi"

export default function Profile() {
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
  console.log(employeeData);
  return (
    <ProfileContainer>
        <div className="general flex flex-col w-[40%] border-1 border-gray shadow-md">
           <div className='relative w-[200px] h-[200px] self-center'>
                <Image src={employeeData.avartImage} alt={employeeData.username} layout='fill' className='rounded-[50%]'/>
                <FcOldTimeCamera className='text-5xl absolute bottom-0 right-0 mr-3'/>
           </div>
           <div className="username mt-6 bg-white p-3">
              <h5 className='text-blue-400'>Your name</h5>
              <div className='flex justify-between items-center pt-2'> 
                  <h6>{employeeData.username}</h6>
                  <FiEdit className='text-2xl cursor-pointer'/>
              </div>
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


