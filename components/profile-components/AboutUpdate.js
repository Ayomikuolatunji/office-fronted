import { FiEdit } from 'react-icons/fi'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify'
import { toastOption } from '../../helpers/toastOption';
import {getEmployeeData} from "../../redux/employee/employeeInfoSlice"
import {useDispatch} from "react-redux"
import { useState } from 'react';


export default function AboutUpdate({employeeData}) {
  const [edit,setEdit]=useState(true)
    const [about,setabout]=useState(employeeData?.about)
    const dispatch=useDispatch()

    
    const handleChange=(e)=>{
       setabout(e.target.value)
    }

    const Edit=()=>{
      const graphQuery={
        query:`   
        mutation {
          update_Employeer_About(id:"${employeeData._id}",about_update:{about:"${about}"})
         {
           _id
           about
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
            setabout(data.update_Employee_about.about)
          })
          .catch(err=>{
            console.log(err.stack)
          })
        if(!about){
          return  toast.error("about can't be empty",toastOption)
        }
    }
  return (
    <div className="username mt-6 bg-white p-3">
       <h5 className='text-blue-400'>About </h5>
       <div className='flex justify-between items-center pt-2'> 
          {edit && <h5>{about}</h5>}
            <input type="text" 
            defaultValue={about} 
            className={`border-r-0 outline-none border-t-0 border-l-0 bg-none ${edit? "border-b-0 hidden" :"border-b-[2px] border-blue-500"}`} disabled={edit} 
            onChange={(e)=>handleChange(e)}/>
            <FiEdit className='text-2xl cursor-pointer' 
            onClick={
              ()=>{Edit();
                setEdit(!edit)}}
              />
        </div>
      <ToastContainer limit={1}/>
   </div>
  )
}