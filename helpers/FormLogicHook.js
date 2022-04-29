import React from 'react'

export const FormLogicHook=()=>{
   const [values,setValues]=React.useState({
       username:"",
       email:"",
       password:"",
       confirmPassword:"" ,
       company_name:"",
       company_location:"",
       company_type:"",
       company_email:"",
       company_password:""  
   })

   const handleChange=(e)=>{
      setValues({...values, [e.target.name]:e.target.value})
   }

   return {
       values,
       handleChange,
       setValues
   }
}
