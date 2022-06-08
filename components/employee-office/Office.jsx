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
    <div className='w-[100%] h-[100%]  relative overflow-hidden'>
          <Sidebar />
          <CompanySidebar/>
    </div>
  )
}

export default Office