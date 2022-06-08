import React from 'react'
import { useSelector } from 'react-redux'

const ProfileSettings = () => {
  const isCompanyOpen=useSelector(state=>state.modal.isCompanyOpen)

  return (
    <div 
    className={`fixed left-0 right-0 bottom-0 bg-red-400 
    h-[100vh] z-[999] w-[20%] ${isCompanyOpen ? 'opacity-100':'opacity-0 hidden'}`}>
    
        ProfileSettings
    </div>
  )
}

export default ProfileSettings 