import React,{useEffect, useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { ContactDiv } from '../../styled-compnent/chat'
import { updateChat } from '../../redux/AllUser-slice'


export default function Contact({contacts}) {
 const dispatch=useDispatch()
  const [currentUserName,setCurrentUserName]=useState("")
  const [currentUserImg,setCurrentUserImg]=useState("")
  const [selectedChat,setSelectedChat]=useState(undefined)
  const mainUser=useSelector(state=>state.users.user)
  
  
  useEffect(()=>{
    if(mainUser){
      setCurrentUserImg(mainUser?.mainUser?.user.avartImage)
      setCurrentUserName(mainUser?.mainUser?.user.username)
    }
  },[mainUser])


  const changeCurrentChat=(index,contact)=>{
     setSelectedChat(index) 
      dispatch(updateChat({contact}))
  }
  const otherUsers=(others,element)=>{
     const newUsers= others.filter(p=>p.username !==element?.username)
     return newUsers
  }

  return (
    <>
      <ContactDiv>
           <div className="brand">
               <h1>Chat</h1>
           </div>
           <div className="contacts">
               {otherUsers(contacts,mainUser?.mainUser?.user ).map((contact,index)=>{
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
 
