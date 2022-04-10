import {toast } from 'react-toastify'
import { RegistrationHook } from './RegistrationHook';

const toastOption={
    position: "bottom-right",
    autoclose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
}

export const validateRegistration=()=>{
    const {values}=RegistrationHook()
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