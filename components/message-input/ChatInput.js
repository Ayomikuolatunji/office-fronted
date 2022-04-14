import React, { useRef, useState } from 'react';
import {IoMdSend} from "react-icons/io"
import InputEmoji from "react-input-emoji";
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { io } from "socket.io-client";
import Button from "../../util/Button"
import { InputContainerStyle } from '../../styled-compnent/chat';
import { updateMessage } from '../../redux/AllUser-slice';
import { sendChatApi } from '../../api/chat-api'
import { Message } from '../../styled-compnent/chat'
import { fetchChats } from '../../api/chat-api'



export default function ChatInput() {
  const socket=useRef()
  const [text, setText] = useState("");
  const msgDispatch=useDispatch()
  const mainUser=useSelector(state=>state.users.user)
  const {contact}=useSelector(state=>state.users.chat)
  const [msg,setMsg]=useState([])

  useEffect(()=>{
    socket.current = io("http://localhost:8080", {
      withCredentials: true,
      transports : ['websocket']
    })
  },[])

  const submitMessgae=async()=>{
      if(!text) return
    //  update msssage state
    msgDispatch(updateMessage({text}))
    //  empty input box
    // call api 
    const {data}=await axios.post(sendChatApi,{
      chat:text,
      to: contact?._id,
      from:mainUser?.mainUser?.user._id
    })
     if(socket.current){
      socket.current.emit("send_chat",{me:true,message:data.chats.chats})
     }
     fetchChat()
  }

  useEffect(()=>{
    async function fetchChat(){
      const {data}=await axios.post(fetchChats,{
        from:mainUser?.mainUser?.user._id,
        to: contact?._id
      })
      console.log(data)
      setMsg(data.sendChat)
    }
  
      fetchChat()
  },[mainUser,contact])
  async function fetchChat(){
    const {data}=await axios.post(fetchChats,{
      from:mainUser?.mainUser?.user._id,
      to: contact?._id
    })
    console.log(data)
    setMsg(data.sendChat)
}
  useEffect(()=>{
    if(socket.current){
      socket.current.on("recieved_chat",data=>{   
            console.log(data)
            fetchChat()
       })
    }
 },[socket])


  return (
    <>
     <Message>
             {msg?.map((message,index)=>{
                 return(
                   <div key={index} className={`msg ${message.me?"sent":"received"}`}>
                      <div className="content">
                           <p>{message.message}</p>
                      </div>
                   </div>
                 )
             })}
        </Message>
      <InputContainerStyle>
           <div className="form-input">
            <InputEmoji
              value={text}
              onChange={setText}
              placeholder="Type a message"
              onEnter={submitMessgae}
              cleanOnEnter
            />
            <Button text={<IoMdSend className='text-5xl ml-4'/>} type="submit" onClick={submitMessgae}/>
           </div>
      </InputContainerStyle>
      
    </>
  )
}


