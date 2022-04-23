import Head from 'next/head';
import React,{useEffect} from "react"
import { useRouter } from 'next/router';
import Chat from "../layout/Chat"
import { useDispatch } from 'react-redux';
import { currentUser } from '../redux/AllUser-slice';
import { singleUser } from '../api/authApi';


export default function Home() {
  const router = useRouter()
  const dispatch=useDispatch()

  useEffect(()=>{
    const userId=localStorage.getItem("userId")
     fetch(`${singleUser}/${JSON.parse(userId)}`)
     .then(res=>{
       return res.json()
     })
     .then(mainUser=>{
        dispatch(currentUser({mainUser}))
     })
     .catch(err=>{
       console.log(err.message)
     })
  })
  
  useEffect(()=>{
     if(!localStorage.getItem("office-user")){
        router.push('/login')
     }
  },[router])


  return (
    <div>      
       <Chat/>
    </div>
  )
}
