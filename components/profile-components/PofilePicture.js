import React, { useState } from 'react'
import Image from "next/image"
import {FcOldTimeCamera} from "react-icons/fc"
import {upload } from '../../aws/upload'
import axios from 'axios'


export default function ProfilePicture({employeeData}) {
   const [url,seturl]=useState("")
   const [progress,setProgress]=useState(0)

  const onImageChange=async(event) => {
   const file=event.target.files[0]

  try{
      if (event.target.files && event.target.files[0]) {
           const response = await axios({
             method: 'GET',
             headers:{
               "Content-Type":"image/jpeg"
             },
                url:"https://115mf3u9df.execute-api.eu-west-3.amazonaws.com/default/collegeImgPreview"
             })
                 // PUT request: for upload url to S3
             if(response.status===200) {
              upload(file,response.data.uploadURL,setProgress,seturl)  
             }
             }
      }catch(error){
        // toast.error("uploading failed", toastOption);
        console.log(error.message);
        return false 
      }

    }
    console.log(progress)
  const uploadImage=()=>{
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
     if(url){
      fetch("http://localhost:8080/graphql",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(graphQuery)
      })
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        console.log(data)
      })
      .catch(err=>{
        console.log(err.message)
      })
     }
  }

  
  return (
    <div className='relative w-[200px] h-[200px] self-center'>
    <Image src={employeeData.avartImage} alt={employeeData.username} layout='fill' className='rounded-[50%]'/>
    <label htmlFor="files" className='text-5xl absolute bottom-0 right-0 mr-3x]'>
      <FcOldTimeCamera className='text-6xl my-3 cursor-pointer'/>
      <input
        type={"file"} 
        id='files' 
        className='hidden'
        onChange={(e)=>onImageChange(e)} 
      />
  </label>
  <button onClick={()=>uploadImage()} className="z-50 bottom-0">Upload</button>
</div>
  )
}
