import { useState, useCallback } from 'react';
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Grid, Paper,Avatar,Typography} from '@mui/material';
import {RiAccountPinCircleLine} from 'react-icons/ri';
import CustomButton from '../../../utils/CumstomButton'
import InputText from '../../../utils/InputText'
import { FormLogicHook } from '../../../helpers/FormLogicHook'
import {loginApi} from "../../../hooks/employeeApis";
import { toastOption } from '../../../helpers/toastOption';
import { loginEmployee } from '../../../redux/auth/employeSlice';
import { getEmployeeId } from '../../../redux/employee/employeeInfoSlice';






export default function Login() { 
  const [loading,setLoading]=useState(false)
  const router = useRouter()
  const isLoggedIn=useSelector(state=>state.employeeAuth.isLoggedIn)
  const dispatch=useDispatch()
  const {values,handleChange}=FormLogicHook()





  const validateRegistration=useCallback(()=>{
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
  },[values]) 


  const submitLogin=useCallback(async(e)=>{
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
            dispatch(getEmployeeId(res.data.employeeId))
          }
        }catch(err){
           setLoading(false)
           toast.error("Either account does not exits or incorrect passsword or Email",toastOption)
        }
      
      }
  },[dispatch, values, validateRegistration,router])

  
  return ( 
    <>    
      <div 
      className="bg-[url('/images/office.jpg')] bg-center bg-no-repeat bg-cover pt-5 pb-5 overflow-hidden h-screen flex justify-center items-center">
        <Grid>
        <Paper  className='w-[370px] mx-auto mt-[20px] p-[20px]'>
        <Grid align = "center">   
            <Avatar className="mb-5">
              <RiAccountPinCircleLine color = "primary"/>
            </Avatar>
            <h2>
               Sign In
            </h2>   
          </Grid>    
         <form onSubmit={(e)=>submitLogin(e)} data-testid="login-form">
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
               label = {"Password"}
               fullWidth
               variant= {"outlined"}
               required
              />
              <CustomButton 
              text={loading?"please wait":"Login"} 
              variant={"contained"} 
              type = {"submit"}
              testid={"login-btn"}
              >
                Submit
              </CustomButton>
              <div className='mt-4'>
                <Typography className='mt-4'>
                <Link href={"/forgot-password"} passHref>
                  Forgotten Password ?
                </Link>
              </Typography>
              </div>
              <div className='mt-2'>
              <Link href={"/create-account-as-employee"} passHref>
                  <a>
                    Don&apos;t have an Account ? 
                    <span className='ml-2 text-black'>
                      Signup
                  </span>
                </a>
               </Link>
              </div>
         </form>
         </Paper>
         </Grid>
         </div>
       <ToastContainer limit={1}/>
       </>
  );
}


