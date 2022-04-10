import React from 'react'

export default function InputText({type,placeholder,onChange,name,className}) {
  return (
     <input 
     type={type} 
     placeholder={placeholder} 
     onChange={onChange}
     name={name}
     className={className}
     />
  )
}
