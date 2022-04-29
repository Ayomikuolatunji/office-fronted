import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { registerCompany } from '../../api/authApi'
import { FormLogicHook } from '../../helpers/FormLogicHook'
import InputText from '../../util/InputText'
import SelectCompany from './SelectCompany'
import SelectCountry from './SelectCountry'
import Button from "../../util/Button"

export default function RegisterCompanyForm() {
 const  {values, handleChange}=FormLogicHook()
 const country=useSelector(state=>state.country.seletedCountry)
 const handleSubmit=async()=>{
     const res=await axios(registerCompany,{

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
                placeholder={"Enter your  company email address"}
            />
        </div>
        <div className="normal-input">
            <InputText 
            text="Email"
            name={values.company_name}
            onChange={(e)=>handleChange(e.target.value)}
            placeholder={"Enter your  company email address"}
            />
        </div>
          <div className='w-[70%] w-full flex mx-auto'>
             <SelectCountry/>
             <SelectCompany/>
          </div>
          <div className="normal-input">
                <textarea
                    text="text"
                    name={values.company_address}
                    onChange={(e)=>handleChange(e.target.value)}
                    placeholder={"Enter your company state, street and city"}
                    className="w-full p-5 bg-gray-100 hover:border-[1px] hover:border-[#997af0] rounded-[0.4rem]"
                />
             </div>
             <div className="normal-input">
                 <Button />
             </div>
    </form>
  )
}
