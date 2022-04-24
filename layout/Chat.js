import React from 'react'
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { ChatContainer } from '../styled-compnent/chat'; 
import { allUsers } from '../api/authApi'
import Contact from '../components/contact/Contact'
import Loader from "../util/loader/Loader"
import ChatBillBoard from '../components/chat-billbaord.js/ChatBillBoard';
import SingleChat from '../components/chats/SingleChat';


const fetcher = (...args) => fetch(...args).then(res => res.json())

function Chat() {
  const currentChat=useSelector(state=>state.users.chat)
  // fetch contact list then transport all through
  const { data, error } = useSWR(allUsers, fetcher)


  
  if (error) return <div>failed to load</div>
  return (
     <>
    <ChatContainer>
     {data
     ?
     <div className="container">
     <Contact 
         contacts={data.users} 
     />
     {
         currentChat === null
     ?  
     <ChatBillBoard/>
     : 
     <SingleChat/>}
   
     </div>
     :
     <Loader/>
    }   
    </ChatContainer>
     </>
  )
}
export default Chat


