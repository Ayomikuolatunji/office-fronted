import Image from 'next/image';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components"
import {FcOldTimeCamera} from "react-icons/fc"
import {FiEdit} from "react-icons/fi"
import {CgProfile} from "react-icons/cg"
import Role from '../../../components/profile-components/UpdateRole';
import ProfilePicture from '../../../components/profile-components/UpdatePofilePicture';

export default function Profile() {
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)

  


  return (
    <ProfileContainer>
        <div className="general flex flex-col w-[40%] border-1 border-gray shadow-md mt-14">
          {/* profile picture */}
          <ProfilePicture employeeData={employeeData}/>
           {/*role */}
           <Role employeeData={employeeData}/>
           <div className="username mt-6 bg-white p-3">
              <h5 className='text-blue-400'>Your name</h5>
              <div className='flex justify-between items-center pt-2'> 
                  <h6>{employeeData?.username}</h6>
                  <FiEdit className='text-2xl cursor-pointer'/>
              </div>
           </div>
           <div className="username mt-6 bg-white p-3">
              <h5 className='text-blue-400'>Email address</h5>
              <div className='flex justify-between items-center pt-2'> 
                  <h6>{employeeData?.email}</h6>
                  <FiEdit className='text-2xl cursor-pointer'/>
              </div>
           </div>
        </div>
         <div className="about w-[60%] bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <CgProfile className='text-4xl'/>
                <span className="tracking-wide">Other Info</span>
            </div>
            <div className="username mt-6 bg-white p-3">
              <h5 className='text-blue-400'>About yourself</h5>
              <div className='flex justify-between items-center pt-2'> 
                  <h6>{employeeData?.about}</h6>
                  <FiEdit className='text-2xl cursor-pointer '/>
              </div>
           </div>
           <div className="username mt-6 bg-white p-3">
              <h5 className='text-blue-400'>Current location</h5>
              <div className='flex justify-between items-center pt-2'> 
                  <h6>{employeeData?.address}</h6>
                  <FiEdit className='text-2xl cursor-pointer '/>
              </div>
           </div>
            <div className="grid grid-cols-2">
                <div>
                    <div className="flex items-center font-semibold text-gray-900 leading-8 mb-3 ml-4">
                        <span className="tracking-wide">Companies</span>
                    </div>
                    <ul className="list-inside space-y-2">
                        <li>
                            <div className="text-blue-500">Owner at Her Company Inc.</div>
                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-insid ">
                        <li>
                            <div className="text-blue-500">Masters Degree in Oxford</div>
                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
    </ProfileContainer>
  )
}

const ProfileContainer=styled.div`
    display: flex;
    width: 100%;
    height: inherit;
`


