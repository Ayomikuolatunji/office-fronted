import React from 'react'
import { useSelector } from 'react-redux'


export default function Welcome() {
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)

  return (
    <div>
       <div className='welcome text-center w-[70%] mx-auto'>
           <p className='text-2xl'>Welcome <span className='text-blue-500 text-3xl'>{employeeData?.username}</span> to onlineoffice where you connect to current working space</p>
           <h5>Your are recentyly not under any company</h5>
           <h6>You can join your company with the compnay Id sent to you from your company.</h6>
       </div>
    </div>
  )
}
