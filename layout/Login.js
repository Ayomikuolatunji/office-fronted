import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from '../util/Button'
import InputText from '../util/InputText'
import { RegistrationHook } from '../helpers/RegistrationHook'
import {loginApi} from "../api/authApi"
import {RegisterMain} from "../styled-compnent/index"





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
  useEffect(()=>{
    if(localStorage.getItem("office-user")){
      router.push('/')
    }
  })

  const submitLogin=async(e)=>{
    setLoading(true)
    const {email,password}=values
      e.preventDefault()
        validateRegistration()
      if(validateRegistration()){
        try{
          const res=await axios.post(loginApi,{
          email,
          password
         })
        if(res.status===200){
          setLoading(false)
        }
        localStorage.setItem("userId",JSON.stringify(res.data.user))
        localStorage.setItem("office-user",JSON.stringify(res.data.token))
        router.push('/')
      }catch(err){
         setLoading(false)
         console.log(err)
         toast.error("Either account does not exits or incorrect passsword or Email",toastOption)
      }
    
    }
     
  }
  const validateRegistration=()=>{
    const {email,password}=values

    if(!password || !email){
        toast.error("No field must be empty", toastOption);
        return false 
     }
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
       <RegisterMain className="bg-gradient-to-r from-purple-500 to-pink-500">
         <div className="brand">
            <h1>Login</h1>
        </div>
         <form onSubmit={(e)=>submitLogin(e)}>
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

              <span className="text-sm">You forgot password ? <Link href={"/reset-password"} passHref>reset password</Link> </span>

              <Button text={loading?"please wait":"Login"} className={"outline"}/>
              <span>You don&apos;t have an account ? <Link href={"/register"} passHref>register</Link> </span>
         </form>
       </RegisterMain>
       <ToastContainer limit={1}/>
     </>
  )
}


