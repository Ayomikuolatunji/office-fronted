import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'


import { io } from "socket.io-client";


const socket = io("http://localhost:8080", {
  withCredentials: true,
  transports : ['websocket']
})

export default function MessageBody() {
  const mainUser=useSelector(state=>state.users.user)
  const {contact}=useSelector(state=>state.users.chat)
  const [msg,setMsg]=useState([])


  useEffect(()=>{
      async function fetchChat(){
          const {data}=await axios.post(fetchChats,{
            from:mainUser?.mainUser?.user._id,
            to: contact?._id
          })
          setMsg(data.sendChat)
      }
      fetchChat()
  },[mainUser,contact])


    return (
      <div>
       
      </div>
    )
}


