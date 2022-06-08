import { FiEdit } from 'react-icons/fi'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify'
import { toastOption } from '../../../helpers/toastOption';
import {getEmployeeData} from "../../../redux/employee/employeeInfoSlice"
import {useDispatch} from "react-redux"
import { useState } from 'react';


export default function UpdateLocation({employeeData}) {
  const [edit,setEdit]=useState(true)
    const [location,setLocation]=useState(employeeData?.location)
    const dispatch=useDispatch()

    
    const handleChange=(e)=>{
       setLocation(e.target.value)
    }

    const Edit=()=>{
      const graphQuery={
        query:`   
        mutation {
          update_Employee_Location(id:"${employeeData._id}",location_update:{location:"${location}"})
         {
           _id
           location
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
            dispatch(getEmployeeData())
            setLocation(data.update_Employee_Location.location)
          })
          .catch(err=>{
          })
        if(!location){
          return  toast.error("location can't be empty",toastOption)
        }
    }
  return (
    <div className="username mt-6 bg-white p-3">
       <h5 className='text-blue-400'>Location </h5>
       <div className='flex justify-between items-center pt-2'> 
          <div>
          {edit ?  
             <h5>{location}</h5>
            : 
            <input type="text" 
            defaultValue={location} 
            className={`border-r-0 outline-none border-t-0 border-l-0 bg-none ${edit? "border-b-0 hidden" :"border-b-[2px] border-blue-500"}`} disabled={edit} 
            onChange={(e)=>handleChange(e)}
            />
            }
          </div>
            <FiEdit className='text-2xl cursor-pointer' 
            onClick={
              ()=>{Edit();
                setEdit(!edit)}
              }
            />
        </div>
      <ToastContainer limit={1}/>
   </div>
  )
}