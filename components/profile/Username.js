import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import InputEmoji from "react-input-emoji";
import styled from "styled-components"


const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Username() {
    const mainUser=useSelector(state=>state.users.user)
    const [text,setText]=useState(mainUser?.mainUser.user.username.toString().toUpperCase())
   

    const graphQuery={
      query:`   
        mutation {
          update_Profile_Username(id:"${mainUser?.mainUser?.user._id}",update_username:{username:"${text}"})
        {
        _id,
        avartImage,
        username
        }
        }
      `
    }


    const ChangeProfilePicture=()=>{
      fetch("http://localhost:8080/graphql",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(graphQuery)
      })
      .then(js=>{
        return js.json()
      })
      .then(data=>{
        console.log(data)
          window.location.reload(false);
      })
      .catch(err=>{
        console.log(err.message)
      })
    }
  return (
    <div className='py-3 mt-6'>
       <div className="ml-1.5">
           <h5>Your name</h5>
       </div>
       <OverRideInput className="input mt-4 w-full -ml-1">
           <InputEmoji
              value={text}
              onChange={setText}
              placeholder={mainUser?.mainUser.user.username.toString().toUpperCase()}
              cleanOnEnter
              className="text-red-500"
              onEnter={ChangeProfilePicture}
            />
       </OverRideInput>
    </div>
  )
}


const OverRideInput=styled.div`
  z-index: 99999;
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
          padding: 15px 0px;
          border-bottom: 3px solid gray;
          border-top: none !important;
          color: #fff;
    }
    .react-input-emoji--placeholder{
      left: 0 ;
      color: #fff;
    }
`