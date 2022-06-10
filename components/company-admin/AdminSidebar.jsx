/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { adminSidebarItems, AdminSidebarSettings } from '../../helpers/adminSidebarItems';
import Link from 'next/link';



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
               {
               adminSidebarItems.map((menuItem, index) => {
                  return (
                     <Link key={index} href={menuItem.route}>
                           <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                            {menuItem.icon}
                           <span className="flex-1 ml-3 whitespace-nowrap">{menuItem.item}</span>
                        </a>
                     </Link>
                  )  
                  })
            }
               </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
               <li>
               {
                  AdminSidebarSettings.map((menuItem, index) => {
                   return  <a href="#" className="flex menuItems-center p-2 text-base font-normal text-white rounded-lg transition duration-75 hover:bg-gray-600 dark:hover:bg-gray-700 dark:text-white group" key={index}>
                    {menuItem.icon}
                   <span className="ml-4">
                      {menuItem.item}
                   </span>
                </a>      
                  })
               }
               </li>
            </ul>
         </div>
      </aside>
    </div>
  )
}

export default AdminSidebar