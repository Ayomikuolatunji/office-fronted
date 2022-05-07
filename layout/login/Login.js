import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Grid, Paper,Avatar,Typography} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CustomButton from '../../util/CumstomButton'
import InputText from '../../util/InputText'
import { FormLogicHook } from '../../helpers/FormLogicHook'
import {loginApi} from "../../api/authApi";
import { toastOption } from '../../helpers/toastOption';
import { loginEmployee } from '../../redux/auth/employeSlice';
import { PaperStyle } from '../../Material-Ui/Login';
import { SX } from '../../Material-Ui/Login';






export default function Login() { 
  const [loading,setLoading]=useState(false)
  const router = useRouter()
  const isLoggedIn=useSelector(state=>state.employeeAuth.isLoggedIn)
  const dispatch=useDispatch()
  const {values,handleChange}=FormLogicHook()


  useEffect(()=>{
      if(isLoggedIn){
        router.push("/employee-dashboard")
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
          router.push('/employee-dashboard')
          dispatch(loginEmployee(res.data))
        }
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
  return ( <>
      
      <div 
      className="bg-[url('../Image/login.jpg')]
       bg-center 
       bg-no-repeat 
       bg-cover 
       h-full 
       pt-5
       pb-5
       overflow-hidden">
  
           <Grid style={SX} >
            <Paper style={PaperStyle} elevation ={10}>

            <Grid align = "center">  
                <Avatar sx = {{marginBottom : "0.6em",backgroundColor : "secondary"}}>
                  <LockOpenIcon color = "primary"/>
                </Avatar>
                <h2 style={{fontFamily : "Roboto"}}>
                Sign In
                </h2>   
              </Grid>

         <form onSubmit={(e)=>submitLogin(e)} style = {{height : "100%"}}>

              <InputText 
                type={"email"}
                onChange={(e)=>handleChange(e)}
                name={"email"}
                value={values.email}
                variant = {"outlined"}
                label = {"Email"}
                fullWidth
              />

              <InputText
               type= {"password"} 
               value={values.password}
               onChange={(e)=>handleChange(e)}
                name={"password"}
               label = "Password"
               fullWidth
               variant= {"outlined"}
               required
              />
    
              

              <CustomButton 
              text={loading?"please wait":"Login"} 
              variant={"contained"} 
              type = {"submit"}
              
              >
                   Submit
              </CustomButton>

              <Typography sx = {{marginBottom : "0.7em", marginTop : "0.7em"}}>
               <Link href={"/reset-password"} passHref>
                 Forgotten Password ?
               </Link>
             </Typography>

             <Typography>
               Don't have an Account ?
                 <Link href={"/register"} passHref sx = {{paddingLeft : "0.3em", paddingBottom : "0.6em"}}>
                 Sign Up
               </Link>
             </Typography>
    
         </form>
         </Paper>
         </Grid>
         </div>

       <ToastContainer limit={1}/>
       </>
  );
}


