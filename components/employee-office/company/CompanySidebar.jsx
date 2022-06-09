import React from 'react'
import { useSelector } from 'react-redux'
import CompanDepartments from './CompanDepartments'
import CompanyHeader from './CompanyHeader'
import Conversations from './Conversations'


const CompanySidebar = () => {
    const isCompanyOpen = useSelector(state => state.modal.isCompanyOpen)


  return (
    <div className={`w-[100%] h-[100%] 
    duration-500 absolute transition-[margin-left] top-0 right-0 left-0 bottom-0 z-[999] ${isCompanyOpen ? "mr-0" :"ml-[100%]"}`}>
     <main>
       {/* company header */}
        <CompanyHeader/>
        {/* company groups */}
        <CompanDepartments/>
        {/* conversation */}
        <Conversations/>
     </main>
    </div>
  )
}

export default CompanySidebar