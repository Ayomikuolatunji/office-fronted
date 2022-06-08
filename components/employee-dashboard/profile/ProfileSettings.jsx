import React from 'react'
import {VscArrowLeft} from "react-icons/vsc"
import { useDispatch, useSelector } from 'react-redux'
import { closeCompany } from '../../../redux/modal/modalSlice'

const ProfileSettings = () => {
  const dispatch=useDispatch()  
  const isCompanyOpen=useSelector(state=>state.modal.isCompanyOpen)

  return (
    <div 
    className={`fixed left-0 right-0 bottom-0 bg-red-400 
    h-[100vh] z-[999] w-[20%] ${isCompanyOpen ? 'opacity-100':'opacity-0 hidden'}`}>
       <div className="go-back bg-[#899daa] p-5">
        <button className="go-back-btn" onClick={()=>{
          dispatch(closeCompany(false))
        }}
        >
          <VscArrowLeft className='text-white text-3xl inline mr-4'/>
           back
        </button>
      </div>
    </div>
  )
}

export default ProfileSettings 