import React from 'react'
import styled from 'styled-components'
import EmojiPicker from 'emoji-picker-react'
import {IoMdSend} from "react-icons/io"
import {BsEmojiSmileFill} from "react-icons/bs"


export default function ChatInput({handlemessage}) {

  return (
    <>
      <InputContainerStyle>
           <div className="button-container">
               <div className="emoji">
                   <BsEmojiSmileFill/>
               </div>
           </div>
      </InputContainerStyle>
    </>
  )
}


const InputContainerStyle=styled.div`

`