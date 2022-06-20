/* eslint-disable @next/next/no-img-element */
import React from 'react'
import RegisterCompanyForm from './RegisterCompanyForm'

export default function RegisterCompany() {
  return (
    <div className='w-full h-[100vh] flex'>
      <div className="left-div w-[50%] block bg-[lig]">
           <div className="wrapper">
                <div className="logo">
                    <img src={"/images/Logo.jpg"} alt="logo" className='w-24 h-24 rounded-full'/>
                </div>
           </div>
       </div>
      <RegisterCompanyForm/>
    </div>
  )
}