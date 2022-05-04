import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import Button from '../util/Button'
import InputText from '../util/InputText'
import { FormLogicHook } from '../helpers/FormLogicHook'
import {registrationApi} from "../api/authApi"
import { toastOption } from '../helpers/toastOption';
import {RegisterMain} from "../styled-compnent/index"




export default function Register() {
  const [loading,setLoading]=useState(false)
  const {values,handleChange}=FormLogicHook()
  const router = useRouter()

  useEffect(()=>{
    if(localStorage.getItem("office-user")){
      router.push('/')
    }
  })

  const submitUserInfo=async(e)=>{
    setLoading(true)
    const {username,email,password}=values
      e.preventDefault()
      if(validateRegistration()){
        try{
          const res=await axios.post(registrationApi,{
          username,
          email,
          password
         })

         if(res.status===201){
          setLoading(false)
         }
         localStorage.setItem("userId",JSON.stringify(res.data.userId))
         router.push('/profile-picture')
        }catch(err){
         setLoading(false)
         console.log(err)
         toast.error(err.message,toastOption)
      }
      }
    
  }
  const validateRegistration=()=>{
    const {username,email,password,confirmPassword}=values
     if(password !==confirmPassword){
        toast.error("Password an confirm password should be equal !", toastOption);
        return false    
     }
     if(username.length < 4){
        toast.error("Your user name should be more than 3 characters !", toastOption);
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
            <h1>Create Account</h1>
        </div>
         <form onSubmit={(e)=>submitUserInfo(e)}>
              <InputText 
                type={"text"}
                onChange={(e)=>handleChange(e)}
                name={"username"}
                placeholder={"Enter your user name"}
                value={values.username}
                className="block"
              />
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
             <InputText 
                type={"password"}
                onChange={(e)=>handleChange(e)}
                name={"confirmPassword"}
                placeholder={"Comfirm your password"}
                value={values.confirmPassword}
                className="block"
              />
              <Button text={loading?"please wait":"register"} className={"outline"}/>
              <span>Already have an account ? <Link href={"/login"} passHref>Login</Link> </span>
         </form>
       </RegisterMain>
       <ToastContainer limit={6}/>
     </>
  )
}


