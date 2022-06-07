/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux';
import {CgProfile} from "react-icons/cg"
import ProfilePicture from './update-profile-components/UpdatePofilePicture';
import UpdateName from './update-profile-components/UpdateName';
import UpdateEmail from './update-profile-components/UpdateEmail';
import UpdateRole from './update-profile-components/UpdateRole';
import AboutUpdate from "./update-profile-components/AboutUpdate";
import UpdateLocation from './update-profile-components/UpdateLocation';


export default function Profile() {
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
  const employeeCompaines=useSelector(state=>state.employeeInfo.employeeCompanies)

  console.log(employeeCompaines)


  return (
    <div className='h-[inherent] flex w-[100%]'>
        <div className="general flex flex-col w-[40%] border-1 border-gray shadow-md mt-14">
          {/* profile picture */}
          <ProfilePicture employeeData={employeeData}/>
           {/*role */}
           <UpdateRole employeeData={employeeData}/>
           {/* name */}
           <UpdateName employeeData={employeeData}/>
          {/* email */}
          <UpdateEmail employeeData={employeeData}/>
        </div>
         <div className="about w-[60%] bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <CgProfile className='text-4xl'/>
                <span className="tracking-wide">Other Info</span>
            </div>
           <AboutUpdate employeeData={employeeData}/>
           <UpdateLocation employeeData={employeeData}/>
            <div className="grid grid-cols-2">
                <div>
                    <div className="flex items-center font-semibold text-gray-900 leading-8 mb-3 ml-4">
                        <span className="tracking-wide">Companies</span>
                    </div>
                    <ul className="list-inside space-y-2">
                    {employeeCompaines?.employee_companies?.map(company=>{
                     return  <li key={company._id}>
                                <div className="text-blue-500">{company.company_name}</div>
                                <div className="text-gray-500 text-xs">
                                {new Date(company.createdAt).toLocaleDateString()}
                                </div>
                            </li>
                         })
                        }
                    </ul>
                </div>
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-insid ">
                        <li>
                            <div className="text-blue-500">Masters Degree in Oxford</div>
                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
  )
}



