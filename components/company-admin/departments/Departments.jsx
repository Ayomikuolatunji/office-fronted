import React from 'react'
import CreateDepartments from './CreateDepartments'
import SearchDepartments from './SearchDepartments'

const Departments = () => {
  return (
    <div className='w-[95%] mx-auto'>
        <div className="header">
            <div className="header-title">
                <h1>Departments</h1>
            </div>
        </div>
         <div className="header flex justify-between">
             <SearchDepartments/>
             <CreateDepartments/>
         </div>
    </div>
  )
}

export default Departments