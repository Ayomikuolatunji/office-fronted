import React from 'react'
import { FormLogicHook } from '../../helpers/FormLogicHook'
import InputText from '../../util/InputText'

export default function RegisterCompanyForm() {
 const  {values, handleChange}=FormLogicHook()

  return (
    <div className="right-div bg-gradient-to-r from-purple-500 to-pink-500">
        <div>
            <InputText 
            text="Email"
            name={values.company_name}
            placeholder={"Enter your  company email address"}
            />
        </div>
    </div>
  )
}
