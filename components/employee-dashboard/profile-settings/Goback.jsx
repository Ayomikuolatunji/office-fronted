import React from 'react'
import {VscArrowLeft} from "react-icons/vsc"
import { useDispatch } from 'react-redux'
import { closeCompany } from '../../../redux/modal/modalSlice'


const Goback = () => {
    const dispatch=useDispatch() 

  return (
    <div className="go-back bg-blue-500 py-8 px-5">
    <button className="go-back-btn" onClick={()=>{
      dispatch(closeCompany(false))
    }}
    >
      <VscArrowLeft className='text-white text-3xl inline mr-4'/>
        <span className='text-white'>
            Go Back
        </span>
    </button>
  </div>
  )
}

export default Goback