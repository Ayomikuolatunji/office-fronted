import React, { useState } from 'react'
import Image from "next/image"
import {FcOldTimeCamera} from "react-icons/fc"
import { upload } from '../../aws/upload'


export default function ProfilePicture({employeeData}) {
   const [url,seturl]=useState("")
   const [progress,setProgress]=useState(0)
  const graphQuery={
    query:`
    mutation {
     update_Profile_Picture(id: "${employeeData._id}", update_picture: {avartImage: "${url}", avatarImageSet: true}) {
       _id
       username
       email
       avartImage
     }
   }  
    `
   }

  const onImageChange=async(event) => {
   const file=event.target.files[0]
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
             upload(file,response.data.uploadURL,setProgress,seturl )
            if(result.status===200){
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
        }
      }catch(error){
        toast.error("uploading failed", toastOption);
        return false 
      }

    }
  
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
