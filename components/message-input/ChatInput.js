import React, { useState } from 'react';
import {IoMdSend} from "react-icons/io"
import InputEmoji from "react-input-emoji";
import Button from "../../util/Button"
import { InputContainerStyle } from '../../styled-compnent/chat';
import { useDispatch } from 'react-redux';
import { updateMessage } from '../../redux/AllUser-slice';

export default function ChatInput() {
  const [text, setText] = useState("");
  const msgDispatch=useDispatch()

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


