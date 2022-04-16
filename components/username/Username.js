import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import InputEmoji from "react-input-emoji";
import styled from "styled-components"

export default function Username() {
    const userName=useSelector(state=>state.users.user)
    const [text,setText]=useState(userName?.mainUser.user.userName)
  return (
    <div className='p-3 mt-10  bg-fuchsia-700'>
       <div className="title">
           <h1>Your name</h1>
       </div>
       <OverRideInput className="input mt-4">
           <InputEmoji
              value={text}
              onChange={setText}
              placeholder={userName?.mainUser.user.username.toString()}
              cleanOnEnter
              className="text-red-500"
            />
       </OverRideInput>
    </div>
  )
}


const OverRideInput=styled.div`
   .react-input-emoji--button{
        background-color:transparent !important;
        position:absolute;
        left:0;
        margin: 40px;
        z-index: 99;
      }
     .react-input-emoji--input {
          height: 50px;
          padding: 15px;
    }

`