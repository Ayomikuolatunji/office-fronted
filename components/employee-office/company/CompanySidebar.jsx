import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsArrowRightShort} from "react-icons/bs"
import { closeCompany} from '../../../redux/modal/modalSlice'

const CompanySidebar = () => {
    const isCompanyOpen = useSelector(state => state.modal.isCompanyOpen)
    const dispatch=useDispatch()
    const selectedCompany=useSelector(state=>state.employeeCompanyInfo.selectedCompany)



  return (
    <div className={`w-[100%] h-[100%] 
    duration-500 absolute transition-[margin-left] top-0 right-0 left-0 bottom-0 ${isCompanyOpen ? "block mr-0" :"hidden -mr-[100%]"}`}>
     <main>
        <div className='w-[100%] flex p-2'>
          <div className="search w-[70%] mx-auto">
                <input 
                className='p-4 bg-white'
                type="text" 
                placeholder="Search members,groups"
                />
          </div>
          <div className="go-back flex justify-center items-center w-[30%] bg-white">
            <BsArrowRightShort className='text-4xl inline mr-4 text-blue-500 font-extrabold cursor-pointer'
              onClick={()=>{
                dispatch(closeCompany(false))
              }}
            />
          </div>
          </div>
     </main>
    </div>
  )
}

export default CompanySidebar