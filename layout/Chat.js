import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import { ChatContainer } from '../styled-compnent/chat'; 
import useSWR from 'swr';
import { allUsers } from '../api/authApi'
import Contact from '../components/contact/Contact'
import Loader from "../components/loader/Loader"
import ChatBillBoard from '../components/chat-billbaord.js/ChatBillBoard';
import SingleChat from '../components/chats/SingleChat';
const fetcher = (...args) => fetch(...args).then(res => res.json())

function Chat() {
  const [currentUser,setCurrentUser]=useState("")
  const currentChat=useSelector(state=>state.users.chat)

  // fetch contact list then transport all through
  const { data, error } = useSWR(allUsers, fetcher)
  useEffect(()=>{
    const userId=localStorage.getItem("userId")
    const id=JSON.parse(userId)
     fetch(`http://localhost:8080/office-api/auth/${JSON.parse(userId)}`)
     .then(res=>{
       return res.json()
     })
     .then(data=>{
      setCurrentUser(data)
     })
     .catch(err=>{
       console.log(err.message)
     })
  },[])

  
  if (error) return <div>failed to load</div>
  if (!data) return <div>
      <Loader/>
  </div>

  return (
    <ChatContainer>
        <div className="container">
           <Contact 
           contacts={data.users} 
           currentUser={currentUser}
           />
           {currentChat === null?  <ChatBillBoard
             currentUser={currentUser}
           />: <SingleChat currentUser={currentUser}/>}
         
        </div>
    </ChatContainer>
  )
}
export default Chat


