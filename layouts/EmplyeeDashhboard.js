import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProfileSettings from '../components/employee-dashboard/profile-settings/ProfileSettings'
import Header from '../components/employee-header/Header'
import Office from '../components/employee-office/Office'
import { getEmployeeData } from '../redux/employee/employeeInfoSlice'



const EmplyeeDashhboard = ({children}) => {
  
  const dispatch=useDispatch()
  
  useEffect(()=>{
      dispatch(getEmployeeData())
  },[dispatch])
  
  return (
    <div className='w-full flex h-[100vh]'>
         <ProfileSettings/>
        <div className="wrapper w-[100%] flex h-[100%]">
            <div className="main w-[80%]">
                <div className="w-[100%] header">
                   <Header />
                </div>
                <main className='w-[90%] mx-auto'>
                    {children}
                </main>
            </div>
            <div className='w-[20%] bg-[#e9e8e8] h-[100%]'>
              <Office/>
          </div>
        </div>
    </div>
  )
}

export default EmplyeeDashhboard