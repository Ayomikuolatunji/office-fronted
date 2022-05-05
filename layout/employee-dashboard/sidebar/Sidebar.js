/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect } from 'react'
import styled from "styled-components"
import {VscSignOut} from "react-icons/vsc"


export default function Sidebar() {
  const employeeCompanies=[
    {route:"/employee-dashboard", item:"Welcome"}, 
    {route:"/employee-dashboard/companies", item:"Your office"},
    {route:"/employee-dashboard/profile",item:"Profile"}
  ]

  useEffect(()=>{

  })

  return (
    <SidebaarDiv>
         <div className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
         <ul className="space-y-2">
          <span  className="flex items-center  mb-5">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Onlineoffice</span>
          </span>
         <li>
            <span  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3">Dashboard</span>
            </span>
         </li>
         {
            employeeCompanies.map((company,index)=>{
                return <li key={index} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href={company.route}>
                      {company.item}
                    </Link>
                </li>
                })
         }
          <li>
            <span  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <Link href={'/employee-dashboard/inbox'} className="flex-1 ml-3 whitespace-nowrap">Inbox</Link>
               <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
            </span>
         </li>
         <li>
            <span  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <VscSignOut className='text-2xl'/>
               <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </span>
         </li>
         </ul>
         </div>
         
    </SidebaarDiv>
  )
}


const SidebaarDiv=styled.div`
    width: 20%;;
    height: 100%;
`