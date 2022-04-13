import React, { useState } from 'react';
import {IoMdSend} from "react-icons/io"
import InputEmoji from "react-input-emoji";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Button from "../../util/Button"
import { InputContainerStyle } from '../../styled-compnent/chat';
import { updateMessage } from '../../redux/AllUser-slice';
import { sendChatApi } from '../../api/chat-api'



export default function ChatInput() {
  const [text, setText] = useState("");
  const msgDispatch=useDispatch()
  const {mainUser}=useSelector(state=>state.users.user)
  const {contact}=useSelector(state=>state.users.chat)
  console.log(mainUser?.user._id, contact?._id)

  const submitMessgae=async()=>{
      if(!text) return
    //  update msssage state
    msgDispatch(updateMessage({text}))
    //  empty input box
    // call api 
    const res=await axios.post(sendChatApi,{
      chat:text,
      to: contact?._id.toString(),
      from:mainUser?.user._id.toString()
    })
    console.log(res)
    setText("")
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


