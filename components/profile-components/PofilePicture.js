import React from 'react'
import Image from "next/image"
import {FcOldTimeCamera} from "react-icons/fc"



export default function ProfilePicture({employeeData}) {



   const handleUpload = (uploadEvent) => {
    uploadEvent.persist();
    setUploading(true);

    const [file] = uploadEvent.target.files;
    const reader = new FileReader();
    reader.onloadend =(onLoadEndEvent) => {
      const graphQuery={
        query:`
        mutation {
         update_Profile_Picture(id: "${"627a2056e4d0048ad86566e7"}", update_picture: {key:"${file.name}", data:"${onLoadEndEvent.target.result.split(",")[1]}"}) {
           _id
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
    reader.readAsDataURL(file);
  };



  
  return (
    <div className='relative w-[200px] h-[200px] self-center'>
    <Image src={employeeData.avatarImage} alt={employeeData.username} layout='fill' className='rounded-[50%]'/>
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
