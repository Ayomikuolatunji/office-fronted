import axios from 'axios'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { registerCompany } from '../../api/authApi'
import { FormLogicHook } from '../../helpers/FormLogicHook'
import InputText from '../../util/InputText'
import SelectCompany from './SelectCompany'
import SelectCountry from './SelectCountry'
import Button from "../../util/Button"

export default function RegisterCompanyForm() {
 const  {values, handleChange}=FormLogicHook()
 const [address,setAddress]=useState("")
 const country=useSelector(state=>state.country.seletedCountry)
 const company=useSelector(state=>state.companies.companies)
  const company_location=`${address}, ${country} `
  console.log(company_location)

 const handleSubmit=async(event)=>{
     event.preventDefault()
     const res=await axios(registerCompany,{
          company_email:values.company_password,
          company_location:company_location,
          company_type:company,
          company_name:values.company_name,
          company_password:values.company_password
     })
 } 

  return (
    <form className="right-div bg-gradient-to-r from-purple-500 to-pink-500 mx-a" onSubmit={(e)=>handleSubmit(e)}>
        <div className="text">
            <h3>Register your company</h3>
        </div>
        <div className="normal-input">
            <InputText 
                text="text"
                name={values.company_name}
                value={values.company_name}
                onChange={(e)=>handleChange(e.target.value)}
                placeholder={"Enter your  company name"}
            />
        </div>
         <div className="normal-input">
            <InputText 
                text="email"
                value={values.company_email}
                name={values.company_email}
                onChange={(e)=>handleChange(e.target.value)}
                placeholder={"Enter your company email address"}
            />
        </div>
        <div className="normal-input">
            <InputText 
            text="password"
            name={values.company_password}
            onChange={(e)=>handleChange(e.target.value)}
            placeholder={"Enter your company account password"}
            />
        </div>
          <div className='w-[70%]  flex mx-auto mf'>
             <SelectCountry/>
             <SelectCompany/>
          </div>
          <div className="normal-input">
                <textarea
                    text="text"
                    name={"addres"}
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    placeholder={"Enter your company state, street and city"}
                    className="w-full p-5 bg-gray-100 hover:border-[1px] hover:border-[#997af0] rounded-[0.4rem]"
                />
             </div>
             <div className="submit mt-5 w-full flex justify-center ">
                 <Button text={"Submit"} />
             </div>
    </form>
  )
}
