import React,{useEffect, useState} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import {FcOldTimeCamera} from "react-icons/fc"
import { useSelector } from 'react-redux';
import axios from 'axios';






export default function ChangePicture({currentUserImg}) {
 const mainuserId=useSelector(state=>state.users.user)
 const [imagePreview,setImagePreview]=React.useState([]);
   

 const toastOption={
  position: "bottom-right",
  autoclose:8000,
  pauseOnHover:true,
  draggable:true,
  theme:"dark"
}


 const uplaod=()=>{
  const graphQuery={
    query:`
    mutation {
     update_Profile_Picture(id: "${mainuserId?.mainUser?.user._id}", update_picture: {avartImage: "${imagePreview}", avatarImageSet: true}) {
       _id
       username
       email
       avartImage
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

 const onImageChange=async(event) => {
   console.log(event.target.files[0])
  try{
      if (event.target.files && event.target.files[0]) {
          const fileUpload=event.target.files[0]
           const response = await axios({
             method: 'GET',
             headers:{
               "Content-Type":"image/jpeg"
             },
                url:"https://115mf3u9df.execute-api.eu-west-3.amazonaws.com/default/collegeImgPreview"
             })
                 // PUT request: for upload url to S3
             const result = await fetch(response.data.uploadURL, {
                     method: 'PUT',
                     body:fileUpload
             })
             if(response.status===200) 
             setImagePreview(result.url.split("?")[0])   
             if(imagePreview){
              uplaod()
             }

        }
      }catch(error){
        toast.error("uploading failed", toastOption);
        return false 
      }
}


  return (
    <div className='flex justify-center flex-col items-center mt-4 relative'>
        <div className="relative">
           <img
            src={`${currentUserImg}`}
            size="xl"
            className='w-[180px] h-[180px] rounded-full opacity-[0.4]'
           />
           <label htmlFor="file" className='flex justify-center flex-col items-center  file z-[2] absolute top-[30%] cursor-pointer left-[15px]'>
               <FcOldTimeCamera className='text-3xl my-3'/>
               <span className='text-[15px]'> Change profile picture</span>
              <input
                 type={"file"} 
                 id='file' 
                 className='hidden'
                 onChange={(e)=>onImageChange(e)} 
              />
           </label>
        </div>
        <ToastContainer limit={1}/>
    </div>
  )
}
