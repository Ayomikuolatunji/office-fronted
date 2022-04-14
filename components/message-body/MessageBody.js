import axios from 'axios'
import React,{useEffect,useState} from 'react'
import styled from "styled-components"
import { fetchChats } from '../../api/chat-api'
import { useSelector } from 'react-redux'

export default function MessageBody() {
  const {mainUser}=useSelector(state=>state.users.user)
  const {contact}=useSelector(state=>state.users.chat)
  const [msg,setMsg]=useState([])
    console.log(mainUser?.user._id, typeof contact?._id)

    useEffect(()=>{
        async function fetchChat(){
            const {data}=await axios.post(fetchChats,{
              from:mainUser?.user._id,
              to: contact?._id
            })
            setMsg(data.sendChat)
        }
        fetchChat()
    },[mainUser,contact])
     console.log(msg)


    return (
      <div>
        <Message>
             {msg?.map((message,index)=>{
                 return(
                   <div key={index} className={`${message.me?"sent":"received"}`}>
                      
                   </div>
                 )
             })}
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
