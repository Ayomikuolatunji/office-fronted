import React from 'react'
import AdminSidebar from '../components/company-admin/AdminSidebar'

const CompanyDashBoard = ({children}) => {
  

  return (
    <div className='w-[100%] h-[100vh] font-serif'>
         <div className="wrapper">
             <div className="sidebar-wrapper">
                 <AdminSidebar/>
             </div>
             <main className="main">
                {children}
             </main>
         </div>
    </div>
  )

  
}

export default CompanyDashBoard