import React,{useEffect, useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { ContactDiv } from '../../styled-compnent/chat'
import { updateChat } from '../../redux/AllUser-slice'
import Search from '../search/Search'


export default function Contact({contacts}) {
 const dispatch=useDispatch()
 const [contact,setContact]=useState("")
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
  const filterUser=contacts.filter(p=>{
    if(p.username.toUpperCase().includes(contact.toUpperCase())){
      return p
    }
    return null
  })
  const handleSearch=(e)=>setContact(e.target.value)
  
  return (
    <>
      <ContactDiv>
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
           <div>
             <Search handleSearch={handleSearch} contact={contact}/>
           </div>
           <div className="contacts">
               {otherUsers(filterUser,mainUser?.mainUser?.user ).map((contact,index)=>{
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
       </ContactDiv>
    </>
  )
}
 
