import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import OfficeBody from './office-body/OfficeBody'
import { useDispatch } from 'react-redux'
import { fetchEmployeeCompanies } from '../../redux/employee/employeeInfoSlice'
import CompanySidebar from './company/CompanySidebar'


const Office = () => {
   const dispatch=useDispatch()     

  
  useEffect(()=>{
      dispatch(fetchEmployeeCompanies())      
  },[dispatch])

  return (
    <div className='w-[100%] h-[100%] bg-[white] relative'>
        <div className='flex justify-between w-full h-[100%]'>
            <div className="sidebar h-[100%]  border-r-2 relative overflow-hidden">
              <Sidebar />
              <CompanySidebar/>
            </div>
        </div>
    </div>
  )
}

export default Office