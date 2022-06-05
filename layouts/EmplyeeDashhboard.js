import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../components/employee/Header/Header'
import { getEmployeeData } from '../redux/employee/employeeInfoSlice'
import Sidebar from './Sidebar'

// import { Header } from '../components/employee/Header/Header'
// import { Copyright } from '@mui/icons-material'


export default function MainEmplyeeDashhboard({children}) {
    const dispatch=useDispatch()
  
    useEffect(()=>{
        dispatch(getEmployeeData())
    },[dispatch])
    
  return (
    <div className='h-[100vh] w-[100%] bg-[#03284d] flex justify-center'>
            
      <div className='w-[85vw] m-auto h-[85vh] flex justify-between items-center flex-col'>
            <Header/>
            <div className='w-[100%] m-auto h-[100%] flex justify-between items-center bg-[#94A8B6]'>
                <div 
                className='relative w-[15%] h-[100%] bg-[#536c7c]'
                >
                  <Sidebar/>
                </div>
                <main 
                  className='w-[85%] h-[100%] 
                  bg-[#F1F5F8] mx-1'
                >
                  {children}
                </main>
            </div> 
      </div> 
        {/* <Footer> 
          <p>All right reserved <Copyright /></p>
        </Footer>  */}
    </div>
  )
}


 