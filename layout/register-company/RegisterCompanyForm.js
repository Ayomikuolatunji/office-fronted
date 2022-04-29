import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormLogicHook } from '../../helpers/FormLogicHook'
import { fetchAllcountries } from '../../redux/countryApiSlice'
import InputText from '../../util/InputText'
import SelectCountry from './SelectCountry'

export default function RegisterCompanyForm() {
 const  {values, handleChange}=FormLogicHook()



  return (
    <div className="right-div bg-gradient-to-r from-purple-500 to-pink-500">
        <div>
            <InputText 
                text="text"
                name={values.company_name}
                placeholder={"Enter your  company email address"}
            />
        </div>
         <div>
            <InputText 
                text="email"
                name={values.company_email}
                placeholder={"Enter your  company email address"}
            />
        </div>
        <div>
            <InputText 
            text="Email"
            name={values.company_name}
            placeholder={"Enter your  company email address"}
            />
        </div>
         <SelectCountry/>
    </div>
  )
}
