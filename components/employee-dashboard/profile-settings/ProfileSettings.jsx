import React from 'react'
import { useSelector } from 'react-redux'
import Goback from './Goback'
import UpdateProfilePicture from './UpdateProfilePicture'

const ProfileSettings = () => { 
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
  const isCompanyOpen=useSelector(state=>state.modal.isCompanyOpen)

  return (
    <div 
    className={`fixed left-0 right-0 bottom-0 bg-blue-400 
    h-[100vh] z-[999] w-[20%] ${isCompanyOpen ? 'opacity-100':'opacity-0 hidden'}`}>
        {/* go back */}
        <Goback/>
        {/* update profile picture */}
        <UpdateProfilePicture employeeData={employeeData}/>
    </div>
  )
}

export default ProfileSettings 