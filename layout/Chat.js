import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { allUsers } from '../api/authApi'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'

export default function Chat() {
  const [contacts,setContacts]=useState([])
  const [currentUser,setCurrentUser]=useState("")
  const users=useSelector((state)=>state.users.users)


    useEffect(()=>{
        if(currentUser){
          axios.get(allUsers)
          .then(res=>{
             console.log(res)
          })
          .catch(err=>{
            console.log(err.message)
          })
        }
    },[currentUser])

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




  return (
    <ChatContainer>
        <div className="container">

        </div>
    </ChatContainer>
  )
}


const ChatContainer=styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 1rem;
     justify-content: center;
     background-color: #131342;
    
    .container{
         gap: 2rem;
         background-color: #00000076;
         padding: 2rem 3rem;
         width: 85vw;
         height: 85vh;
         display: grid;
         grid-template-columns: 25% 75%;

         @media (max-width:1080px) and (min-width:720px){
             grid-template-columns: 35% 65%;
         }
    }
`