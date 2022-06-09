import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Goback from './Goback'
import UpdateName from './UpdateName'
import UpdateEmail from "./UpdateEmail"
import UpdateProfilePicture from './UpdateProfilePicture'
import UpdateRole from './UpdateRole'
import UpdateAbout from './UpdateAbout'
import UpdateLocation from './UpdateLocation'
import { VscSignOut } from 'react-icons/vsc'
import { useRouter } from 'next/router'
import {closeProfileModal,closeCompany} from "../../../redux/modal/modalSlice"
import { logoutEmployee } from '../../../redux/auth/employeSlice';
import { clearEmployeeCompanies, clearSelectedCompany } from '../../../redux/employee/employeeCompanySlice'
import {clearEmployeData,clearEmployeeId} from '../../../redux/employee/employeeInfoSlice'

const ProfileSettings = () => { 
  const dispatch=useDispatch()
  const isLoggedIn = useSelector((state) => state.employeeAuth.isLoggedIn);
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
  const isProfileOpen=useSelector(state=>state.modal.isProfileOpen)
  
  const router = useRouter();


	useEffect(() => {
			if (!isLoggedIn) {
				router.push('/login');
			}
		},[ router, isLoggedIn ]);

	const LogoutFunc = () => {
		if (isLoggedIn) {
			router.push('/login');
      // empty the redux store for employeeSlices
			dispatch(logoutEmployee());
      dispatch(clearEmployeeCompanies())
      dispatch(clearSelectedCompany())
      dispatch(clearEmployeData())
      dispatch(closeCompany(false))
      dispatch(closeProfileModal(false))
      dispatch(clearEmployeeId())
		}
	};


  return (
    <div 
    className={`fixed left-0 right-0 bottom-0 bg-blue-400 
    h-[100vh] z-[999] w-[20%] ${isProfileOpen ? 'opacity-100':'opacity-0 hidden transition-opacity duration-200 ease-out'}`}>
        {/* go back */}
        <Goback/>
         {/* profile components */}
         <div className='w-full flex justify-center mt-7 flex-col'>
            {/* update profile picture */}
           <UpdateProfilePicture employeeData={employeeData}/>
           <UpdateName employeeData={employeeData}/>
           <UpdateEmail  employeeData={employeeData}/>
           <UpdateRole employeeData={employeeData}/>
           <UpdateAbout employeeData={employeeData}/>
           <UpdateLocation employeeData={employeeData}/>
         </div>
          {/*logout  */}
         <div className="text-[#F1F5F8] bg-black py-[0.45em] px-[0.75em] text-[1rem] w-[50%] z-[2] mt-6 mx-auto cursor-pointer">
					<span className="flex items-center justify-around p-[0.45em] rounded-4xl transition-[background] duration-[.25] hover:bg-[#3d3d3d]" onClick={() => LogoutFunc()}>
						<VscSignOut className="display-block" />
						<span className='block text0z'>Logout</span>
					</span>
			    </div>
    </div>
  )
}

export default ProfileSettings 