import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormLogicHook } from '../../helpers/FormLogicHook'
import InputText from '../../util/InputText'
import SelectCountry from './SelectCountry'

export default function RegisterCompanyForm() {
 const  {values, handleChange}=FormLogicHook()
 const country=useSelector(state=>state.country.seletedCountry)
    
  return (
    <form className="right-div bg-gradient-to-r from-purple-500 to-pink-500">
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
          <div className='normal-input w-full'>
             <SelectCountry/>
          </div>
          <div className="normal-input">
                <textarea
                    text="text"
                    name={values.company_address}
                    onChange={(e)=>handleChange(e.target.value)}
                    placeholder={"Enter your company state, street and city"}
                    className="w-full p-5 bg-gray-100"
                />
             </div>
    </form>
  )
}
