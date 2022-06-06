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
                return <li 
                className='text-sm space-y-4 mt-2 bg-slate-500 p-3 text-white'
                key={company._id}>
                  {company.company_name}
              </li>
            })
          }
       </div>
    </div>
  )
}

export default Sidebar