/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState,useEffect} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '../styled-compnent';
import Button from "../util/Button"
import { profile } from '../api/authApi';
import { Loading} from "@nextui-org/react";
import {FcOldTimeCamera} from "react-icons/fc"
import MuiModal from '../util/modal/MuiModal';


export default function ProfilePicture() {
    const [imagePreview,setImagePreview]=React.useState("");
    const [loading,setLoading]=useState(false);
    const [image, setImage] =React.useState("");
    const [user,setUser]=useState([])
    const defaultImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU'
    const router=useRouter()    
    const modal=useSelector(state=>state.users.modal)
   console.log(modal);
 
    const toastOption={
        position: "bottom-right",
        autoclose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
    }
 
    useEffect(()=>{
      const userId=localStorage.getItem("userId")
       fetch(`http://localhost:8080/office-api/auth/${JSON.parse(userId)}`)
       .then(res=>{
         return res.json()
       })
       .then(data=>{
         setLoading(false)
         setUser(data)
       })
       .catch(err=>{
         console.log(err.message)
       })
    },[])

    const proflePicture=async()=>{
      if(!imagePreview){
         return toast.error("Profile picture required!!", toastOption)
      }
        try{
          if(user){
            const res=await axios.post(`${profile}/${user.user._id}`,{

              avartImage:imagePreview,
              avatarImageSet:true
            })
            if(res.status===200){
              router.push("/")
            }
            console.log(res);
          }
          }catch(err){
            console.log(err.message)
              toast.error("Network error ", toastOption)
          }
    }

  useEffect(()=>{
    if(localStorage.getItem("office-user")){
        router.push('/login')
    }
  },[router])
  
  const onImageChange=async(event) => {
    setLoading(true)
    try{
        if (event.target.files && event.target.files[0]) {
            const fileUpload=event.target.files[0]
             setImage(URL.createObjectURL(event.target.files[0]));
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
               console.log(result)
               if(result.status===200) {
                setImagePreview(result.url.split("?")[0]) 
                setLoading(false)  
               }
          }
        }catch(error){
           setLoadingImg(false)
           toast.error("uploading failed", toastOption);
           return false 
        }
  }
  return (
    <>  
    {modal && <MuiModal proflePicture={proflePicture}/>}
        {modal || <Container>
              <React.Fragment>
              <div className="thumbnail-img mx-auto mt-10 flex flex-col items-center">
               {loading?   <Loading size="xl" /> : <img src={image || defaultImg} className={`${image?"border-red border-4":""}`} style={{width:"200px", borderRadius:"100%",height:"200px"}}/>}
                  <label htmlFor="image" className='flex justify-center flex-col items-center  file z-[999]  cursor-pointer'>
                     <FcOldTimeCamera className='text-3xl my-3'/>
                    <span className='text-lg text-white'> Upload profile picture</span>
                    <input
                      type={"file"} 
                      id='image' 
                      className='hidden'
                      onChange={onImageChange} 
                      style={{display:"none"}}
                    />
                </label>
               </div>
              <Button 
              text={"Set as Profile Picture"}
              onClick={()=>proflePicture()}
              type="submit"
              />    
            </React.Fragment>
        </Container>}
        <ToastContainer limit={1}/>
    </>
  )
}

