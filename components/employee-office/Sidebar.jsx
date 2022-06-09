/* eslint-disable @next/next/no-img-element */
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeCompanies, getSelectedCompany } from '../../redux/employee/employeeCompanySlice'
import { openCompany } from '../../redux/modal/modalSlice'
import AddCompany from './AddCompany'

const Sidebar = () => {
  const employeeCompaines=useSelector(state=>state.employeeCompanyInfo.employeeCompanies)
  const isCompanyOpen = useSelector(state => state.modal.isCompanyOpen)
  const dispatch=useDispatch()

   
  const getSCompanyFunc=(id)=>{
       return employeeCompaines?.employee_companies?.map(country=>{
          if(country._id===id){
             dispatch(getSelectedCompany(country))
            return country
          }
       })
  }


  useEffect(()=>{
    dispatch(fetchEmployeeCompanies())
  },)

  return (
    <div className={`${isCompanyOpen ? "opacity-[0] hidden":"block hidden"}]`}>
       <div className="add-company">
           <AddCompany/>
       </div>
       <div className="company-lists mt-2 flex w-[100%] mx-auto flex-col h-[70vh]">
            {employeeCompaines?.employee_companies?.length>0? employeeCompaines?.employee_companies.map(company=>{
                return <div 
                className='text-sm space-y-4 mt-2  p-2 text-white inline-flex items-center justify-between'
                key={company._id}
                  onClick={()=>{
                    dispatch(openCompany(true))
                    getSCompanyFunc(company._id)
                  }}
                >
                  <div className="logo w-[25%]">
                      <img src={company.company_profile_picture} alt="img" className='max-w-full w-[65px]'/>
                  </div>
                  <div className="company-name text-left cursor-pointer text-black border-b-2 border-gray-500 w-[75%] p-2">
                      <h5 className='font-normal'>
                        {company.company_name}
                      </h5>
                  </div>
              </div>
            })
            :
            <div className="text-center">
              <h5>
                You dont have any company yet.
              </h5>
            </div>
          }
       </div>
    </div>
  )
}

export default Sidebar