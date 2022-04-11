import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components"
import { Buffer } from 'buffer';
import Button from "../util/Button"
import { profile } from '../api/authApi';
import Loader from '../components/loader/Loader';


export default function Avatar() {
    const [avatars,setAvatars]=React.useState([]);
    const [loading,setLoading]=useState(true);
    const [selectedAvatar,setSelectedAvatar]=useState(undefined);
    const [user,setUser]=useState([])
    const router=useRouter()    
    const api="https://api.multiavatar.com/45678945";

    const toastOption={
        position: "bottom-right",
        autoclose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
    }
 
    useEffect(()=>{
      const userId=localStorage.getItem("userId")
      const id=JSON.parse(userId)
       fetch(`http://localhost:8080/office-api/auth/${JSON.parse(userId)}`)
       .then(res=>{
         return res.json()
       })
       .then(data=>{
         setUser(data)
       })
       .catch(err=>{
         console.log(err.message)
       })
    },[])

    const proflePicture=async()=>{
        if(selectedAvatar===undefined){
          toast.error("Profile picture required", toastOption);
          return false 
        }
         try{
          if(user){
            console.log(user.user._id)
            const {data}=await axios.post(`${profile}/${user.user._id}`,{
              avartImage:avatars[selectedAvatar],
              avatarImageSet:true
            })
            if(data.isSet){
              router.push("/")
            }
          }
         }catch(err){
             toast.error(err.message, toastOption)
         }
    }
    useEffect(()=>{
      async function fetch(){
        let data=[]
        for(let i=0; i<=5; i++){
         const image=await axios.get(`${api}/${Math.random(Math.random()* 1000)}`)
         const buffer=new Buffer(image.data)
         data.push(buffer.toString("base64"))
        }
        setAvatars(data)
        setLoading(false)
      }
      fetch()
    },[])
  return (
    <>
        {loading && <Loader/>}
       {loading || <Container>
             <div className="title">
                 <h1>Pick an Avatar as your profile picture</h1>
             </div>
            <div className="avatars">
               {avatars.map((avatar,index)=>{
                   return <div 
                   className={`avatar ${selectedAvatar?"selected":" "}`} 
                   key={index} 
                   onClick={()=>setSelectedAvatar(index)}
                    >
                      <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar"
                    />
                   </div>
               })}
             </div>
             <Button 
             text={"Set as Profile Picture"}
             onClick={()=>proflePicture()}
             />    
        </Container>}
        <ToastContainer limit={1}/>
    </>
  )
}

const Container=styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 3rem;
     background-color: #131324;
     height: 100vh;

     .title {
        h1{
           color: #fff;
        }
     }

     .avatars{
       display: flex;
       gap: 3rem;
        
       .avatar {
         border: 0.4rem solid transparent;
         padding: 0.4rem;
         border-radius: 5rem;
         display: flex;
         justify-content: center;
         align-items: center;
         cursor: pointer;
         transition: 0.5s ease-in-out all;
         img{
           height: 6rem;
         }
         .selected{
          border: 7.4rem solid #997af0;
          background-color: green;
         }
       }
     }
     button{
            background-color: #997af0;
            border-radius: 0.4rem;
            cursor: pointer;
            text-transform: uppercase;
            color: #fff;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: bold;
            color: #fff;
            border: none;
            transition: 0.5s ease-in-out;
            &:hover{
                background-color: #4e0eff; 
            }
         }
`
