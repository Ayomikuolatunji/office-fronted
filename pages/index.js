import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getEmployeeData } from '../redux/employee/employeeInfoSlice';




export default function Home() {
   const dispatch=useDispatch()
   const router = useRouter()
   const isLoggedIn=useSelector(state=>state.employeeAuth.isLoggedIn)

   useEffect(()=>{
      dispatch(getEmployeeData())
   },[dispatch])

   useEffect(()=>{
    if(!isLoggedIn){
      router.push("/login")
    }
   },[router, isLoggedIn])

   useEffect(()=>{
    if(router.asPath==="/"){
      router.push("/employee-dashboard")
    }
   },[router])
  return (
    <div>
      <Head>
        <title>Office Room</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       <h1>Home page</h1>
    </div>
  )
}
