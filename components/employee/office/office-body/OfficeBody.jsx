import React from 'react'
import { useSelector } from 'react-redux'

const OfficeBody = () => {
   const employeeCompainess=useSelector(state=>state.employeeInfo.employeeCompanies)

   console.log(employeeCompainess)


  return (
    <div>OfficeBody</div>
  )
}

export default OfficeBody