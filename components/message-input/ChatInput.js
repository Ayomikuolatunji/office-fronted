import React, { useState } from 'react';
import styled from 'styled-components'
import {IoMdSend} from "react-icons/io"
import {BsEmojiSmileFill} from "react-icons/bs"


export default function ChatInput({handlemessage}) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  
  return (
    <>
      <InputContainerStyle>
           <div className="button-container">
               <div className="emoji">
                   <BsEmojiSmileFill/>
               </div>
           </div>
           <form className="form-input">
             <input type="text" />
           </form>
      </InputContainerStyle>
    </>
  )
}


const InputContainerStyle=styled.div`

`