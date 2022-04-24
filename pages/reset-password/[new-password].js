import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from '../../util/Button'
import InputText from '../../util/InputText'
import { RegistrationHook } from '../../helpers/RegistrationHook'
import {setPassword} from "../../api/authApi"
import {RegisterMain} from "../../styled-compnent/index"





export default function SetPassword() {
  const [loading,setLoading]=useState(false)
  const router = useRouter()
  const {values,handleChange}=RegistrationHook()
  const { id , code } = router.query
 
  const toastOption={
    position: "bottom-right",
    autoclose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }

  const submitLogin=async(e)=>{
    setLoading(true)
    const {password}=values
      e.preventDefault()
        validateRegistration()
      if(validateRegistration()){
        try{
          const res=await axios.post(setPassword,{
          userId:id,
          resetToken:code,  
          password
         })
         if(res.status===200){
          setLoading(false)
          router.push("/login")
         }
      console.log(res)
      }catch(err){
         setLoading(false)
         console.log(err)
         toast.error("Either account does not exits or incorrect passsword or Email",toastOption)
      }
    
    }
     
  }
  const validateRegistration=()=>{
    const {password}=values
     if(password.length < 5){
      toast.error("Your paswword should be 8 characters long!", toastOption);
      return false 
     }
     return true
  } 
  return (
     <>
       <RegisterMain className="bg-gradient-to-r from-purple-500 to-pink-500">
         <div className="brand">
            <h1>new passsword</h1>
        </div>
         <form onSubmit={(e)=>submitLogin(e)}>
           <InputText 
                type={"password"}
                onChange={(e)=>handleChange(e)}
                name={"password"}
                placeholder={"Enter your password"}
                value={values.password}
                className="block"
            />
            <Button text={loading?"please wait":"sumbit"} className={"outline"}/>
         </form>
       </RegisterMain>
       <ToastContainer limit={1}/>
     </>
  )
}


