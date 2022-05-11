import React from 'react'
import { FiEdit } from 'react-icons/fi'


export default function UpdateName({employeeData}) {
  return (
    <div className="username mt-6 bg-white p-3">
    <h5 className='text-blue-400'>Your name</h5>
    <div className='flex justify-between items-center pt-2'> 
        <h6>{employeeData?.username}</h6>
        <FiEdit className='text-2xl cursor-pointer'/>
    </div>
 </div>
  )
}
