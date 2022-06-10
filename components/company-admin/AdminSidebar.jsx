/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {GrProjects} from "react-icons/gr";
import {BiTask} from "react-icons/bi";
import {AiOutlineTeam, AiTwotoneCalendar} from "react-icons/ai"
import {GoReport} from "react-icons/go";
import { FcSettings } from 'react-icons/fc';
import {GrDiamond} from "react-icons/gr";
import { GiVideoConference } from 'react-icons/gi';



const AdminSidebar = () => {
  return (
    <div className="sidebar w-full">
       <aside className="w-full" aria-label="Sidebar">
          <div className="overflow-y-auto bg-[#94A8B6] rounded dark:bg-gray-800 w-full h-[100vh] text-white">
          <div className="profile-header  bg-[#536C7C]">
             <div className='flex  w-[100%] items-center mx-auto py-4 px-3'>
               <div className="profile-header-image">
                  <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="profile-header-image"  className='w-[100px] h-[80px] rounded-3xl'/>
               </div>
               <div className="profile-header-content ml-2">
                  <span className="profile-header-name block text-white font-extrabold text-xl">Ayomiku Doe</span>
                  <span className="profile-header-title text-green-400 text-xl">online</span>
               </div>
             </div>
          </div>
            <ul className="space-y-2 py-4 px-3 ">
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                     <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                     <span className="ml-3">Dashboard</span>
                  </a>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                     <GrProjects/>
                     <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
            
                  </a>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                    <BiTask/>
                     <span className="flex-1 ml-3 whitespace-nowrap">Tasks</span>
                  </a>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                     <AiOutlineTeam/>
                     <span className="flex-1 ml-3 whitespace-nowrap">Employees</span>
                  </a>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                     <AiTwotoneCalendar/>
                     <span className="flex-1 ml-3 whitespace-nowrap">
                        Calendar
                     </span>
                  </a>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                     <GoReport/>
                     <span className="flex-1 ml-3 whitespace-nowrap">
                        Reports
                     </span>
                  </a>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                     <GiVideoConference/>
                     <span className="flex-1 ml-3 whitespace-nowrap">
                        Conference
                     </span>
                  </a>
               </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg transition duration-75 hover:bg-gray-600 dark:hover:bg-gray-700 dark:text-white group">
                     <GrDiamond/>
                     <span className="ml-4">Upgrade to Pro</span>
                  </a>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg transition duration-75 hover:bg-gray-600 dark:hover:bg-gray-700 dark:text-white group">
                     <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path filRrule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                     <span className="ml-3">Documentation</span>
                  </a>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg transition duration-75 hover:bg-gray-600 dark:hover:bg-gray-700 dark:text-white group">
                     <FcSettings/>
                     <span className="ml-3">
                        App settings
                     </span>
                  </a>
               </li>
            </ul>
         </div>
      </aside>
    </div>
  )
}

export default AdminSidebar