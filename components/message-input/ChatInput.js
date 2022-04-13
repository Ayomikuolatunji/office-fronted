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
             <input type="text" placeholder='message'/>
             <button className='button'><IoMdSend/></button>
           </form>
      </InputContainerStyle>
    </>
  )
}


const InputContainerStyle=styled.div`
      display: grid;
      grid-template-columns: 5% 95%;
      padding: 0.2rem;
      background-color: #080420;
      align-items: center;
      position: absolute;
      bottom: 0;
      margin: 30px;
      .button-container{
        display: flex;
        align-items: center;
        color: #fff;
        gap: 1rem;

        .emoji{
          svg{
            color: yellow;
          }
        }
      }
`