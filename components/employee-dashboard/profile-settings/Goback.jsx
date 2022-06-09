import React, { useEffect } from 'react'
import {VscArrowLeft} from "react-icons/vsc"
import { useDispatch } from 'react-redux'
import { getEmployeeData } from '../../../redux/employee/employeeInfoSlice'
import { closeProfileModal } from '../../../redux/modal/modalSlice'


const Goback = () => {
    const dispatch=useDispatch()


    useEffect(()=>{
      dispatch(getEmployeeData())
   },[dispatch])

  return (
    <div className="go-back bg-blue-500 py-6 px-5" onClick={()=>{
      dispatch(closeProfileModal(false))
    }}>
    <button className="go-back-btn">
      <VscArrowLeft className='text-white text-3xl inline mr-4'/>
        <span className='text-white'>
            Go Back
        </span>
    </button>
  </div>
  )
}

export default Goback