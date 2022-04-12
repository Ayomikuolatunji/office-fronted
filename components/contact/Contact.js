import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { ContactDiv } from '../../styled-compnent/chat'
import { updateChat } from '../../redux/AllUser-slice'


export default function Contact({contacts,currentUser}) {
 const dispatch=useDispatch()
  const [currentUserName,setCurrentUserName]=useState("")
  const [currentUserImg,setCurrentUserImg]=useState("")
  const [selectedChat,setSelectedChat]=useState(undefined)
  const [cureenChat,setCurrentChat]=useState("")

  useEffect(()=>{
    if(currentUser){
        setCurrentUserImg(currentUser.user.avartImage)
        setCurrentUserName(currentUser.user.username)
    }
  },[currentUser])


  const changeCurrentChat=(index,contact)=>{
     setSelectedChat(index) 
      dispatch(updateChat({contact}))
  }

  return (
    <>
      <ContactDiv>
           <div className="brand">
               <h1>Chat</h1>
           </div>
           <div className="contacts">
               {contacts.map((contact,index)=>{
                  return (
                      <div key={index}  className={`contact ${selectedChat===index? "selected":" "}`}
                     onClick={()=>changeCurrentChat(index,contact)}
                      >
                         <img src={`data:image/svg+xml;base64,${contact.avartImage}`} alt="avatar"
                       onClick={()=>setSelectedChat(index)}
                       />
                       <div className="userName">
                           <h1>{contact.username}</h1>
                       </div>
                      </div>
                  )
               })}
           </div>
           <div className="currentUser">
                <div className="avatar"> 
                  <img src={`data:image/svg+xml;base64,${currentUserImg}`} alt="avatar"
                       onClick={()=>setSelectedChat(index)}
                       />
                    <div className="userName">
                        <h1>{currentUserName}</h1>
                    </div>
                </div>
           </div>
       </ContactDiv>
    </>
  )
}
 
