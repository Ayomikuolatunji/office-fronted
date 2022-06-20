/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
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
           <div className="content flex justify-center items-center flex-col mt-[30%]">
               <h1>Welcome to onlineoffice</h1>
               <p className='text-white font-semibold'>
                  Onlineoffice allows connect you to your office and your office to you.
               </p>
                <p className='text-white'>
                  You can register your company and get access to your office.
                </p>
           </div>
           <div className='account-login text-center mt-10'>
                <p>
                   <span className=''>
                     Already have an office? 
                   </span>
                  <Link href='/login-admin'>
                       <button className=''>
                            Login to your office
                       </button>
                  </Link>
                </p>
           </div>
       </div>
      <RegisterCompanyForm/>
    </div>
  )
}