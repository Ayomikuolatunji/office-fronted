import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {VscArrowLeft} from "react-icons/vsc"
import { closeCompany} from '../../../redux/modal/modalSlice'

const CompanySidebar = () => {
    const isCompanyOpen = useSelector(state => state.modal.isCompanyOpen)
    const dispatch=useDispatch()
    const selectedCompany=useSelector(state=>state.employeeCompanyInfo.selectedCompany)



  return (
    <div className={`w-[100%] h-[100%] 
    duration-300 absolute top-0 right-0 left-0 bottom-0 ${isCompanyOpen ? "opacity-100 block" :"opacity-0 hidden"}`}>
      <div className="go-back bg-[#899daa] p-5">
        <button className="go-back-btn" onClick={()=>{
          dispatch(closeCompany(false))
        }}
        >
          <VscArrowLeft className='text-white text-3xl inline mr-4'/>
           back
        </button>
      </div>
     <main>
       {selectedCompany?.company_name}
     </main>
    </div>
  )
}

export default CompanySidebar