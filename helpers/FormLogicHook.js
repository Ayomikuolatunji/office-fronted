import React from 'react'

export const FormLogicHook=()=>{
   const [values,setValues]=React.useState({
       username:"",
       email:"",
       role:"",
       password:"",
       confirmPassword:"" ,
       company_name:"",
       company_type:"",
       company_email:"",
       company_address:"",
       company_password:"",
       company_id:"", 
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
