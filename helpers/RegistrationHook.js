import React from 'react'

export const RegistrationHook=()=>{
   const [values,setValues]=React.useState({
       username:"",
       email:"",
       password:"",
       confirmPassword:""  
   })

   const handleChange=(e)=>{
      setValues({...values, [e.target.name]:e.target.value})
   }

   return {
       values,
       handleChange
   }
}
