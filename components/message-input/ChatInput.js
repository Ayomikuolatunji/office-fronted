import React, { useState } from 'react';
import styled from 'styled-components'
import {IoMdSend} from "react-icons/io"
import InputEmoji from "react-input-emoji";
import Button from "../../util/Button"
import { InputContainerStyle } from '../../styled-compnent/chat';

export default function ChatInput({handlemessage}) {
  const [text, setText] = useState("");

    const submitMessgae=(e)=>{
      e.preventDefault()
      console.log(text)
      setText("")
    }
    // input submit
  const Enter=()=>console.log(text)
  return (
    <>
      <InputContainerStyle>
           <form className="form-input" onSubmit={submitMessgae}>
            <InputEmoji
              value={text}
              onChange={setText}
              placeholder="Type a message"
              onEnter={Enter}
              cleanOnEnter
            />
            <Button text={<IoMdSend className='text-5xl ml-4'/>} type="submit"/>
           </form>
      </InputContainerStyle>
    </>
  )
}


