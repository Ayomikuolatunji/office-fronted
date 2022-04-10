import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from '../../util/Button'
import InputText from '../../util/InputText'
import { RegistrationHook } from '../../helpers/RegistrationHook'
import {loginApi} from "../../api/authApi"
import {RegisterMain} from "../../styled-compnent/index"





export default function Login() {
  const [loading,setLoading]=useState(false)
  const router = useRouter()
  const {values,handleChange}=RegistrationHook()

  const toastOption={
    position: "bottom-right",
    autoclose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }


  const submitLogin=async(e)=>{
    setLoading(true)
    const {username,email,password,confirmPassword}=values
      e.preventDefault()
      validateRegistration()
      if(!validateRegistration()){
         return
      }
      try{
          const res=await axios.post(loginApi,{
          email,
          password
         })
        console.log(res)
        if(res.status===201){
          setLoading(false)
        }
        localStorage.setItem("office-user",JSON.stringify(res.data.user))
        router.push('/')
      }catch(err){
         setLoading(false)
          console.log(err)
          toast.error(err.message,toastOption)
      }
    
  }
  const validateRegistration=()=>{
    const {email,password}=values
     if(password.length < 5){
      toast.error("Your paswword should be 8 characters long!", toastOption);
      return false 
     }
     if(!email){
      toast.error("Email is required!", toastOption);
      return false 
     }
     return true
  } 
  return (
     <>
       <RegisterMain>
         <div className="brand">
            <h1>Login</h1>
        </div>
         <form onSubmit={submitLogin}>
              <InputText 
                type={"email"}
                onChange={(e)=>handleChange(e)}
                name={"email"}
                placeholder={"Enter your email address"}
                value={values.email}
                className="block"
              />
              <InputText 
                type={"password"}
                onChange={(e)=>handleChange(e)}
                name={"password"}
                placeholder={"Enter your password"}
                value={values.password}
                className="block"
              />
              <Button text={loading?"please wait":"register"} className={"outline"}/>
              <span>You dont an account ? <Link href={"/register"} passHref>register</Link> </span>
         </form>
       </RegisterMain>
       <ToastContainer limit={6}/>
     </>
  )
}


