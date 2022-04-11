import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { profile } from '../api/authApi';
import styled from "styled-components"
import { Buffer } from 'buffer';
import axios from 'axios';

export default function Avatar() {
    const [avatars,setAvatars]=React.useState([]);
    const [loading,setLoading]=useState(true);
    const [selectedAvatar,setSelectedAvatar]=useState(undefined);    
    const api="https://api.multiavatar.com/45678945";

    const toastOption={
        position: "bottom-right",
        autoclose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
      }
    const proflePicture=async()=>{

    }
    useEffect(()=>{
      async function fetch(){
        let data=[]
        for(let i=0; i<4; i++){
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
        <Container>
             <div className="title">
                 <h1>Pick an Avatar as your profile picture</h1>
             </div>
             <div className="avatar">
               {avatars.map((avatar,index)=>{
                   return <div className={`avatar ${selectedAvatar===index?"selected":" "}`} key={index}>
                      <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar" onClick={()=>setSelectedAvatar(index)} />
                   </div>
               })}
             </div>
        </Container>
        <ToastContainer limit={1}/>
    </>
  )
}

const Container=styled.div`
    
`