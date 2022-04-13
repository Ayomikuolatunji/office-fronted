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
  const mainUser=useSelector(state=>state.users.user)
  console.log(mainUser)
      
  const submitMessgae=(e)=>{
      if(!text) return
    //  update msssage state

    msgDispatch(updateMessage({text}))
    //  empty input box
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


