import React from 'react'
import Sidebar from './Sidebar'

const Office = () => {
  return (
    <div className='w-[100%] h-[100%] bg-[white]'>
        <div className='flex justify-between w-full h-[100%]'>
            <div className="sidebar h-[100%] w-[17%] border-r-2">
              <Sidebar />
            </div>
            <div className="main bg-[#dfdfdf] h-[100%] w-[89%]">

            </div>
            <div className="right bg-[green] h-[100%] w-[15%] hidden">

            </div>
        </div>
    </div>
  )
}

export default Office