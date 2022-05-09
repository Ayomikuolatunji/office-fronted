import React from 'react'
import {FiEdit} from "react-icons/fi"

export default function Role({employeeData}) {
    const [edit,setEdit]=useState(true)
    const [role,setRole]=useState(employeeData?.role)
  return (
    <div className="username mt-6 bg-white p-3">
        <h5 className='text-blue-400'>Your role</h5>
        <div className='flex justify-between items-center pt-2'> 
            <input type="text" defaultValue={role} className="border-r-0 border-t-0 border-l-0 bg-none" disabled={edit} onChange={(e)=>setRole(e.target.value)}/>
            <FiEdit className='text-2xl cursor-pointer' onClick={()=>setEdit(!edit)}/>
        </div>
    </div>
  )
}
