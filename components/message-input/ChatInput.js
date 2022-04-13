import React, { useState } from 'react';
import styled from 'styled-components'
import {IoMdSend} from "react-icons/io"
import InputEmoji from "react-input-emoji";
import Button from "../../util/Button"

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


const InputContainerStyle=styled.div`
      display: grid;
      padding: 0.2rem;
      background-color: #fff;
      width: 95%;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 10px;

      .form-input{
        width: 90%;
        border-radius: 2rem;
        background-color: transparent;
        display: flex;

        .react-input-emoji--button{
        background-color:transparent !important;
        position:absolute;
        left:0;
        margin: 450px;
        z-index: 99;
      }
        .react-input-emoji--input {
          height: 50px;
          padding: 15px;
        }
         
      }
  
`