import React from 'react'
import AdminSidebar from '../components/company-admin/AdminSidebar'

const CompanyDashBoard = ({children}) => {
  

  return (
    <div className='w-[100%] h-[100vh] font-serif'>
         <div className="wrapper w-[100%] h-[inherent] flex">
             <div className="sidebar-wrapper w-[15%] h-[100vh]">
                 <AdminSidebar/>
             </div>
             <main className="main w-[75%]">
                {children}
             </main>
         </div>
    </div>
  )

  
}

export default CompanyDashBoard