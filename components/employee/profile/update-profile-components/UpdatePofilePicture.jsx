/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import Image from 'next/image'
import {FcOldTimeCamera} from "react-icons/fc"
import {getEmployeeData} from "../../../../redux/employee/employeeInfoSlice"
import CircleProgressbar from '../../../../utils/materialUi/CircleProgressBar'




export default function ProfilePicture({employeeData}) {
  const [loading ,setLoading]=useState(false)
  const dispatch=useDispatch()


   const handleUpload = (uploadEvent) => {
    uploadEvent.persist();
    setLoading(true)
    const [file] = uploadEvent.target.files;
    const reader = new FileReader();
    reader.onloadend =(onLoadEndEvent) => {
      const graphQuery={
        query:`
        mutation {
         update_Profile_Picture(id: "${employeeData._id}", update_picture: {key:"${file.name}", data:"${onLoadEndEvent.target.result.split(",")[1]}"}) {
           _id
         }
       }  
        `
       }
        fetch("http://localhost:8080/graphql",{
          method:"POST",
          mode: "cors",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(graphQuery)
        })
        .then(res=>{
          return res.json()
        })
        .then(data=>{
          setLoading(false)
          dispatch(getEmployeeData())
        })
        .catch(err=>{
           setLoading(false)
          console.log(err.message)
        })
       }
    reader.readAsDataURL(file);
  };



  
  return (
    <div className='relative w-[200px] h-[200px] self-center'>
       <div className='absolute z-50 top-[40%] left-[35%]'>
       {loading && <CircleProgressbar/>}
       </div>
      <Image src={employeeData.avartImage} alt={employeeData.username} layout='fill' className={`${loading ? "hidden" :" block"} rounded-[50%]`} />
      <label htmlFor="files" className='text-5xl absolute bottom-0 right-0 mr-3x]'>
        <FcOldTimeCamera className='text-6xl my-3 cursor-pointer'/>
        <input
          type={"file"} 
          id='files' 
          className='hidden'
          onChange={(e)=>handleUpload(e)} 
        />
    </label>
</div>
  )
}
