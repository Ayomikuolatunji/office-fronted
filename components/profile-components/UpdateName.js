import React,{useState} from 'react'
import { FiEdit } from 'react-icons/fi'
import { ToastContainer,toast } from 'react-toastify'
import { toastOption } from '../../helpers/toastOption';
import {getEmployeeData} from "../../redux/employee/employeeInfoSlice"
import {useDispatch} from "react-redux"


export default function UpdateName({employeeData}) {
  const [edit,setEdit]=useState(true)
  const [name,setName]=useState(employeeData?.username)
  const dispatch=useDispatch()


      
  const handleChange=(e)=>{
    setName(e.target.value)
 }

 const Edit=()=>{
   const graphQuery={
     query:`   
     mutation {
      update_Profile_Username(id:"${employeeData._id}",update_username:{username:"${name}"})
      {
        username
      }
    }
     `
   }
   fetch("http://localhost:8080/graphql",{
        method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify(graphQuery)
       })
       .then(res=>res.json())
       .then((data)=>{
         console.log(data)
         dispatch(getEmployeeData())
         setName(data.update_Profile_Username.username)
       })
       .catch(err=>{
         console.log(err.stack)
         return  toast.error("Error updating username",toastOption)
       })
 }



  return (
    <div className="username mt-6 bg-white p-3">
        <h5 className='text-blue-400'>Profile name</h5>
        <div className='flex justify-between items-center pt-2'> 
            <input type="text" 
            defaultValue={name} 
            className={`border-r-0 outline-none border-t-0 border-l-0 bg-none ${edit? "border-b-0" :"border-b-[2px] border-blue-500"}`} disabled={edit} 
            onChange={(e)=>handleChange(e)}/>
            <FiEdit className='text-2xl cursor-pointer' onClick={
              ()=>{Edit();setEdit(!edit)}}/>
        </div>
        <ToastContainer limit={1}/>
    </div>
  )
}
