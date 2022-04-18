import React,{useEffect} from "react"
import { useRouter } from 'next/router';


export default function ForgotPassword() {
    const router = useRouter()


    // restrict page if loggedin
    useEffect(()=>{
        if(!localStorage.getItem("office-user")){
           router.push('/login')
        }
     },[router])


  return (
    <div>ForgotPassword</div>
  )
}
