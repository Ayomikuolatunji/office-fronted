import React from 'react'
import Image from "next/image"
import {FcOldTimeCamera} from "react-icons/fc"


export default function ProfilePicture({employeeData}) {
  
  return (
    <div className='relative w-[200px] h-[200px] self-center'>
    <Image src={employeeData.avartImage} alt={employeeData.username} layout='fill' className='rounded-[50%]'/>
    <label htmlFor="file" className='text-5xl absolute bottom-0 right-0 mr-3x]'>
      <FcOldTimeCamera className='text-6xl my-3 cursor-pointer'/>
      <input
        type={"file"} 
        id='file' 
        className='hidden'
        // onChange={(e)=>onImageChange(e)} 
      />
  </label>
</div>
  )
}
