import axios from 'axios'
import React,{useEffect,useState} from 'react'
import styled from "styled-components"
import { fetchChats } from '../../api/chat-api'
import { useSelector } from 'react-redux'

export default function MessageBody() {
  const {mainUser}=useSelector(state=>state.users.user)
  const {contact}=useSelector(state=>state.users.chat)
    const [mgs,setMsg]=useState([])


    useEffect(()=>{
        async function fetchChat(){
            const message=await axios.post(fetchChats,{
              from:mainUser?.user._id.toString(),
              to: contact?._id.toString()
            })
            console.log(message)
        }
        fetchChat()
    },[mainUser,contact])
  
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
