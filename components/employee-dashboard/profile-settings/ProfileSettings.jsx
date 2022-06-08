import React from 'react'
import { useSelector } from 'react-redux'
import Goback from './Goback'
import UpdateName from './UpdateName'
import UpdateEmail from "./UpdateEmail"
import UpdateProfilePicture from './UpdateProfilePicture'
import UpdateRole from './UpdateRole'
import UpdateAbout from './UpdateAbout'
import UpdateLocation from './UpdateLocation'

const ProfileSettings = () => { 
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
  const isCompanyOpen=useSelector(state=>state.modal.isCompanyOpen)

  return (
    <div 
    className={`fixed left-0 right-0 bottom-0 bg-blue-400 
    h-[100vh] z-[999] w-[20%] ${isCompanyOpen ? 'opacity-100':'opacity-0 hidden transition-opacity duration-200 ease-out'}`}>
        {/* go back */}
        <Goback/>
         {/* profile components */}
         <div className='w-full flex justify-center mt-7 flex-col'>
            {/* update profile picture */}
           <UpdateProfilePicture employeeData={employeeData}/>
           <UpdateName employeeData={employeeData}/>
           <UpdateEmail  employeeData={employeeData}/>
           <UpdateRole employeeData={employeeData}/>
           <UpdateAbout employeeData={employeeData}/>
           <UpdateLocation employeeData={employeeData}/>
         </div>
    </div>
  )
}

export default ProfileSettings 