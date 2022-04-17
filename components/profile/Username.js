import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import InputEmoji from "react-input-emoji";
import styled from "styled-components"

export default function Username() {
    const userName=useSelector(state=>state.users.user)
    const [text,setText]=useState(userName?.mainUser.user.username.toString().toUpperCase())
   

    const query={
      query:`{
           
      }`
    }

    const ChangeProfilePicture=()=>{
         console.log(text)
    }
   console.log(text);
  return (
    <div className='py-3 mt-6'>
       <div className="title ml-1.5">
           <h1>Your name</h1>
       </div>
       <OverRideInput className="input mt-4 w-full -ml-1">
           <InputEmoji
              value={text}
              onChange={setText}
              placeholder={userName?.mainUser.user.username.toString().toUpperCase()}
              cleanOnEnter
              className="text-red-500"
              onEnter={ChangeProfilePicture}
            />
       </OverRideInput>
    </div>
  )
}


const OverRideInput=styled.div`
  z-index: 999;
.react-input-emoji--container{
    border-radius:0 !important;
    background-color: transparent !important;
    border: none;
    
}
   .react-input-emoji--button{
        background-color:transparent !important;
        position:absolute;
        color:"yellow";
        left:0;
        margin-left: 255px;
        z-index: 99;
      }
     .react-input-emoji--input {
          height: 50px;
          padding: 15px;
          border-bottom: 3px solid gray;
          border-top: none !important;
          color: #fff;
    }
    .react-input-emoji--placeholder{
      left: 0 ;
      color: #fff;
    }
`