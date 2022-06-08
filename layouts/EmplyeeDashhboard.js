import React from 'react'
import Header from '../components/employee-header/Header'
import Sidebar from './Sidebar'


const EmplyeeDashhboard = ({children}) => {
  return (
    <div className='w-full flex h-[100vh]'>
        <div className="wrapper w-[100%] flex h-[100%]">
            <div className="main w-[80%]">
                <div className="w-[100%] header">
                   <Header />
                </div>
              {children}
            </div>
            <div className='w-[20%] bg-black h-[100%]'>
             <Sidebar/>
          </div>
        </div>
    </div>
  )
}

export default EmplyeeDashhboard