/* eslint-disable @next/next/no-img-element */
import React from 'react'
import RegisterCompanyForm from './RegisterCompanyForm'

export default function RegisterCompany() {
  return (
    <div className='w-full h-[100vh] flex'>
      <div className="left-div w-[50%] block bg-gradient-to-b from-cyan-500 to-blue-500">
           <div className="wrapper">
                <div className="logo p-3">
                    <img src={"/images/Logo.jpg"} alt="logo" className='w-24 h-24 rounded-full'/>
                </div>
           </div>
           <div className="content flex justify-center items-center flex-col top-[50%]">
               <h1>Welcome to onlineoffice</h1>
               <p>
                  Onlineoffice allows connect you to your office and your office to you.
               </p>
           </div>
       </div>
      <RegisterCompanyForm/>
    </div>
  )
}