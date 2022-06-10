import React from 'react'
import {BsSearch} from "react-icons/bs";

const Header = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
             <div className="logo">
                <h1>Onlineoffice Admin</h1>
              </div>
              <div className="search">
                  
                   <input type="text" 
                    placeholder="Search members, projects, and more"  
                   />
              </div>
              <div className="right">
                  <div className="user">
                    <h3>Company name</h3>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Header