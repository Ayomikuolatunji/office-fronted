import React from 'react'
import { useDispatch } from 'react-redux'
import ProfileSettings from '../components/employee-dashboard/profile-settings/ProfileSettings'
import Header from '../components/employee-header/Header'
import { getEmployeeData } from '../redux/employee/employeeInfoSlice'
import Sidebar from './Sidebar'


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