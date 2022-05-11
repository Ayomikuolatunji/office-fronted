import React from 'react'
import Image from "next/image"
import {FcOldTimeCamera} from "react-icons/fc"



export default function ProfilePicture({employeeData}) {
  const [image, setImage] =React.useState("");


   const handleUpload = (uploadEvent) => {
    setImage(URL.createObjectURL(uploadEvent.target.files[0]));
    uploadEvent.persist();

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
    <Image src={image ? image : employeeData.avartImage} alt={employeeData.username} layout='fill' className='rounded-[50%]'/>
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
