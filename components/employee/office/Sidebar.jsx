/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import AddCompany from './AddCompany'

const Sidebar = () => {
  const employeeCompainess=useSelector(state=>state.employeeInfo.employeeCompanies)

  console.log(employeeCompainess)



  return (
    <div>
       <div className="add-company">
           <AddCompany/>
       </div>
       <div className="company-lists mt-2 flex w-[100%] mx-auto flex-col h-[70vh]">
            {employeeCompainess?.employee_companies?.map(company=>{
                return <div 
                className='text-sm space-y-4 mt-2 bg-slate-500 p-3 text-white cursor-pointer inline-flex items-center justify-between'
                key={company._id}>
                  <div className="logo">
                      <Image src={company.company_profile_picture} alt="img" width={50} height={40}/>
                  </div>
                  <div className="company-name text-left">
                      <h6>
                        {company.company_name}
                      </h6>
                  </div>
              </div>
            })
          }
       </div>
    </div>
  )
}

export default Sidebar