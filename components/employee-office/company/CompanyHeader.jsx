import React from 'react'
import {BsArrowRightShort} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { closeCompany} from '../../../redux/modal/modalSlice'

const CompanyHeader = () => {
    const dispatch=useDispatch()
    const selectedCompany=useSelector(state=>state.employeeCompanyInfo.selectedCompany)



  return (
    <div className='w-[100%] flex p-2'>
    <div className="search w-[70%] mx-auto">
          <input 
          className='p-4 bg-white'
          type="text" 
          placeholder="Search members,groups"
          />
    </div>
    <div className="go-back flex justify-center items-center w-[25%] bg-white">
      <BsArrowRightShort className='text-4xl inline mr-4 text-blue-500 font-extrabold cursor-pointer'
        onClick={()=>{
          dispatch(closeCompany(false))
        }}
      />
    </div>
    </div>
  )
}

export default CompanyHeader