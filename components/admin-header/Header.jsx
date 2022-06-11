import React from 'react'
import {BsSearch} from "react-icons/bs";

const Header = () => {
  return (
    <div className='w-[95%] mx-auto'>
        <div className='flex justify-between items-center'>
             <div className="logo w-[20%]">
                <h1 className='text-lg'>Onlineoffice Admin</h1>
              </div>
              {/* search */}
              <div className="search space-x-5 relative mt-4 border-0 outline-none w-[70%]">
                   <BsSearch
                    className="text-[#c9c9c9] text-xl absolute left-10 top-3"
                   />
                    <input type="text" placeholder="Search projects, members and more" 
                    className="w-full  p-2 mb-5 indent-14" 
                    />
                </div>
                {/* end search */}
              <div className="right w-[20%] flex justify-end">
                  <div className="user">
                    <h3 className='text-lg'>Company name</h3>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Header