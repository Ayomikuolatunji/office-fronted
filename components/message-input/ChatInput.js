import React, { useState } from 'react';
import styled from 'styled-components'
import {IoMdSend} from "react-icons/io"
import {BsEmojiSmileFill} from "react-icons/bs"
import InputEmoji from "react-input-emoji";


export default function ChatInput({handlemessage}) {
  const [text, setText] = useState("");

    const submit=(e)=>{
      e.preventDefault()
      console.log(text)
    }
  return (
    <>
      <InputContainerStyle>
           <div className="button-container">
               {/* <div className="emoji">
                   <BsEmojiSmileFill/>
               </div> */}
           </div>
           <form className="form-input" onSubmit={submit}>
            <InputEmoji
              value={text}
              onChange={(e)=>setText(e.target.value)}
              placeholder="Type a message"
            />
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
      background-color: #fff;
      width: 95%;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 30px;
      .button-container{
        display: flex;
        align-items: center;
        color: #fff;
        gap: 1rem;

        .emoji{
          svg{
            color: yellow;
            font-size: 1.5rem;
          }
        }
      }
      .form-input{
        width: 70%;
        border-radius: 2rem;
        background-color: transparent;;
        input{
          width: 90%;
          height: 60px;
          border: none;
          text-indent: 10px;
          font-size: 20px;
        }
      }
`