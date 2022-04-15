import React,{useEffect, useState} from 'react'
import { Avatar} from '@nextui-org/react';
import {FcOldTimeCamera} from "react-icons/fc"





export default function ChangePicture({currentUserImg}) {
 const [file,setFile]=useState("")
 const [loading,setLoading]=useState(true);

  return (
    <div className='flex justify-center flex-col items-center mt-4 relative'>
        <div className="relative">
           <Avatar
            src={`data:image/svg+xml;base64,${currentUserImg}`}
            size="xl"
            className='w-[230px] h-2/5 rounded-full opacity-[0.3]'
           />
           <label htmlFor="file" className='flex justify-center flex-col items-center  file z-[999] absolute top-[30%] cursor-pointer left-[30px]'>
               <FcOldTimeCamera className='text-3xl my-3'/>
               <span className='text-lg'> Change profile picture</span>
              <input type="file" id='file' className='hidden'/>
           </label>
        </div>
       
    </div>
  )
}
