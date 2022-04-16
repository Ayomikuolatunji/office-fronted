import React,{useEffect, useState} from 'react'
import { Avatar} from '@nextui-org/react';
import {FcOldTimeCamera} from "react-icons/fc"
import { useSelector } from 'react-redux';
import axios from 'axios';





export default function ChangePicture({currentUserImg}) {
 const [file,setFile]=useState("")
 const [loading,setLoading]=useState(true);
 const mainuserId=useSelector(state=>state.users.user)
  

 const graphQuery={
   query:`
   mutation {
    update_Profile_Picture(id: "62549bb9c491f7313bdc2c68", update_picture: {avartImage: "https://adio-agro-img.s3.eu-west-3.amazonaws.com/3413463.jpg", avatarImageSet: true}) {
      _id
      username
      email
    }
  }
  
   `
  }



 const upload_Profile=()=>{
      fetch("http://localhost:8080/graphql",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
         body:JSON.stringify(graphQuery)
      })
      .then(js=>{
        return js.json()
      })
      .then(data=>{
        console.log(data)
      })
      .catch(err=>{
        console.log(err.message)
      })
 }



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
              <input
                 type={"file"} 
                 id='file' 
                 className='hidden'
              />
           </label>
           <button onClick={()=>upload_Profile()}>submit</button>
        </div>
       
    </div>
  )
}
