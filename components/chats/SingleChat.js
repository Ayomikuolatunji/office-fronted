import React from 'react'
import { useSelector } from 'react-redux'

export default function SingleChat() {
 const currenChat=useSelector(state=>state.users.chat)
 
  return (
    <div>SingleChat</div>
  )
}
