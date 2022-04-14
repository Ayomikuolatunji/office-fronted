import React, { useState } from 'react';
import {IoMdSend} from "react-icons/io"
import InputEmoji from "react-input-emoji";
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Button from "../../util/Button"
import { InputContainerStyle } from '../../styled-compnent/chat';
import { updateMessage } from '../../redux/AllUser-slice';
import { sendChatApi } from '../../api/chat-api'
import { io } from "socket.io-client";

const socket = io("http://localhost:8080", {
  withCredentials: true,
  transports : ['websocket']
})
export default function ChatInput() {
  const [text, setText] = useState("");
  const msgDispatch=useDispatch()
  const {mainUser}=useSelector(state=>state.users.user)
  const {contact}=useSelector(state=>state.users.chat)
  const [arrivedMsg,setArrMesg]=useState("")



  const submitMessgae=async()=>{
      if(!text) return
    //  update msssage state
    msgDispatch(updateMessage({text}))
    //  empty input box
    // call api 
    const res=await axios.post(sendChatApi,{
      chat:text,
      to: contact?._id,
      from:mainUser?.user._id
    })
     console.log(res)
     if(socket.current){
       socket.emit("send_chat", )
     }
  }


  return (
    <>
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


