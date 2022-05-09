import Link from 'next/link'
import { useState, useEffect } from 'react';
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Grid, Paper, Avatar, Typography } from '@mui/material';
import CustomButton from '../../util/CumstomButton'
import InputText from '../../util/InputText'
import { FormLogicHook } from '../../helpers/FormLogicHook'
import {registrationApi} from "../../api/authApi"
import { toastOption } from '../../helpers/toastOption';
import { getEmployeeId } from '../../redux/employee/employeeInfoSlice';
import { PaperStyle } from '../../Material-Ui/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';





export default function Register() {
  const [loading,setLoading]=useState(false)
  const {values,handleChange}=FormLogicHook()
  const router = useRouter()
  const dispatch=useDispatch()


  const submitUserInfo=async(e)=>{
    setLoading(true)
    const {username,email,password,role}=values
      e.preventDefault()
      if(validateRegistration()){
        try{
          const res=await axios.post(registrationApi,{
          username,
          email,
          password,
          role
         })
         if(res.status===201){
          setLoading(false)
          dispatch(getEmployeeId(res.data.employeeId))
         }
         router.push('/profile-picture')
        }catch(err){
         setLoading(false)
         console.log(err)
         toast.error(err.message,toastOption)
      }
      }
    
  }
  const validateRegistration=()=>{
    const {username,email,password,confirmPassword,role}=values
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
     if(!role){
      toast.error("Your employed role is required!", toastOption);
      return false 
     }
     return true
  } 
  return (  <>
    
    <div className="bg-[url('/images/office.jpg')] bg-center bg-no-repeat bg-cover pt-5 pb-5 overflow-hidden h-screen flex justify-center items-center">
        <Grid>   
            <Paper className="w-[450px] mx-auto mt-[20px] p-[20px]">
            <Grid align = "center">  
                <Avatar>
                  <LockOpenIcon color = "primary"/>
                </Avatar>
                <h2>
                Sign Up
                </h2>   
              </Grid>

         <form onSubmit={(e)=>submitUserInfo(e)}>
              <InputText 
                type={"text"}
                onChange={(e)=>handleChange(e)}
                name={"username"}
                label = {"Username"}
                value={values.username}
                fullwidth
                variant = {"outlined"} 
              />
              <InputText 
                type={"email"}
                onChange={(e)=>handleChange(e)}
                name={"email"}
                label = {"Email"}
                value={values.email}
                fullwidth
                variant = {"outlined"} 
              />
               <InputText 
                type={"text"}
                onChange={(e)=>handleChange(e)}
                name={"role"}
                label = {"your role"}
                value={values.role}
                fullwidth
                variant = {"outlined"}
              />
              <InputText 
                type={"password"}
                onChange={(e)=>handleChange(e)}
                name={"password"}
                label = {"Password"}
                value={values.password}
                fullwidth
                variant = {"outlined"}
             />
             <InputText 
                type={"password"}
                onChange={(e)=>handleChange(e)}
                name={"confirmPassword"}
                label = {"Confirm password"}
                value={values.confirmPassword}
                fullwidth
                variant = {"outlined"}
              />
              <CustomButton 
              text={loading?"please wait":"register"}
               variant = {"contained"}
               type = {"submit"}>
                Register
              </CustomButton>
              <div className='mt-3'>
              <Typography>
                Already have an account ?

               <Link href={"/login"} passHref>
                 Login
               </Link>
             </Typography>
              </div>
         </form>
         </Paper>
              </Grid>
          </div>
       <ToastContainer limit={6}/>
     </>
  )
}


