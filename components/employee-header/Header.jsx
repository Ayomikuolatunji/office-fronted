import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {BsSearch} from "react-icons/bs";
import AddCompany from './add-company/AddCompany';


const Header = () => {
  return (
    <div className='w-[70%]'>
        <div className='flex flex-row justify-between items-center w-full'>
             <div className="hamburger flex items-center">
                <GiHamburgerMenu className="hamburger-icon text-4xl " />
                <div className="search space-x-5">
                    <input type="text" placeholder="Search project members,task" className="w-full border-2 p-2 mb-5" />
                </div>
             </div>
             <div className="add-company">
                  <AddCompany/>
             </div>
        </div>
    </div>
  )
}

export default Header