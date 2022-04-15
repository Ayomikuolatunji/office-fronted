import React from 'react'
import { Avatar} from '@nextui-org/react';
import {FcOldTimeCamera} from "react-icons/fc"


export default function ChangePicture() {
  return (
    <div className='flex justify-center items-center mt-4 relative  '>
         <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          size="xl"
          className='w-8/12 h-2/5 rounded-full opacity-[0.3]'
        />
        <div className="file z-[999] absolute top-[30%] cursor-pointer">
           <label htmlFor="file" className='z-50 flex justify-center flex-col items-center'>
               <FcOldTimeCamera className='text-3xl my-3'/>
               <span> Change profile picture</span>
              <input type="file" id='file' className='hidden'/>
           </label>
        </div>
    </div>
  )
}
