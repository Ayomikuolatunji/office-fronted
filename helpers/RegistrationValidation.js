import { RegistrationHook } from "./RegistrationHook"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegistrationValidation=()=>{
const {values:{username,email,password,confirmPassword}}=RegistrationHook()
  

  if(password !==confirmPassword){
      
  }    

}