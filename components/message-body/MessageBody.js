import React,{useEffect,useState} from 'react'
import styled from "styled-components"
import { fetchChats } from '../../api/chat-api'

export default function MessageBody() {
    const [mgs,setMsg]=useState([])


    useEffect(()=>{
           

    })
  
    return (
      <div>
        <Message>
          
        </Message>
      </div>
    )
}

const Message=styled.div`
    background-color: #FFF;
    color: #000;
    height: 50vh;
    overflow: auto;
`
