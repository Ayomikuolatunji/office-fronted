import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {useSelector } from 'react-redux';
import { Alert,Grid, Paper} from '@mui/material';
import { useRouter } from 'next/router';
import CustomButton from '../../../util/CumstomButton'
import InputText from '../../../util/InputText'
import { FormLogicHook } from '../../../helpers/FormLogicHook'
import {fogetPassword} from "../../../hooks/employeeApis";
import { toastOption } from '../../../helpers/toastOption';





export default function ForgotPassword() {
  const router=useRouter()
  const isLoggedIn=useSelector(state=>state.employeeAuth.isLoggedIn)
  const [loading,setLoading]=useState(false)
  const {values,handleChange}=FormLogicHook()
  const [isMessage,setIsMessage]=useState(false)



  const validateRegistration=useCallback(()=>{
    const {email}=values
    if(!email){
      toast.error("Email is required!", toastOption);
      return false 
  }
    return true
  },[values])


  const sendResetPassword=useCallback(async(event)=>{
    setLoading(true)
    setIsMessage(false)
    const {email}=values
      event.preventDefault()
      if(validateRegistration()){
      try{
          const res=await axios.post(fogetPassword,{
          email,
         })
         if(res.status===200){
            setIsMessage(true)
         }
        if(res.status===200){
          setLoading(false)
        }
      }catch(error){
         setLoading(false)
         setIsMessage(false)
         console.log(error.message)
         toast.error("Either account does not exits or incorrect passsword or Email",toastOption)
      }
    
    }
  },[validateRegistration,values])

  return ( <>
      <div className="bg-[url('/images/office.jpg')] bg-center bg-no-repeat bg-cover pt-5 pb-5 overflow-hidden h-screen flex justify-center items-center">
           <Grid sx={{marginTop :"7.5rem"}}>
            <Paper className="w-[400px] mx-auto mt-[20px] p-[20px]">
            <Grid align = "center" sx = {{padding : "0.75rem 0.45rem"}}>  
                <h3 style={{fontFamily : "Roboto"}}>
                RESET PASSWORD
                </h3>   
              </Grid>

         <form 
         onSubmit={(e)=>sendResetPassword(e)}
         className = "p-4"
          data-testid="forgot-password-form"
         >
              <InputText 
                type={"email"}
                onChange={(e)=>handleChange(e)}
                name={"email"}
                label = {"Enter email account"}
                value={values.email}
                variant = {"outlined"}
                fullwidth
              />
              
           {isMessage && <Alert severity="success">Check your email!</Alert>}
              <CustomButton
              onClick={sendResetPassword}
              type = {"button"}
              text={loading?"please wait":"Reset"} 
              variant={"contained"}
              fullwidth
              />
              <p>Provide your email address to change password</p>
              <p className='text-base text-center'>
                Back to login <Link href={"/login"} passHref>
                 Login
               </Link>
             </p>
         </form>
         </Paper>
         </Grid>
       </div>
       <ToastContainer limit={1}/>
     </>
  )
}


