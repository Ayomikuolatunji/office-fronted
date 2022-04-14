import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { Message } from '../../styled-compnent/chat'
import { fetchChats } from '../../api/chat-api'


export default function MessageBody() {
  const {mainUser}=useSelector(state=>state.users.user)
  const {contact}=useSelector(state=>state.users.chat)
  const [msg,setMsg]=useState([])

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
  
    return (
      <div>
        <Message>
             {msg?.map((message,index)=>{
                 return(
                   <div key={index} className={`msg ${message.me?"sent":"received"}`}>
                      <div className="content">
                           <p>{message.message}</p>
                      </div>
                   </div>
                 )
             })}
        </Message>
      </div>
    )
}


