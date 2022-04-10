import React from 'react'

export default function InputText({type,placeholder,onChange,name,className,value}) {


  return (
     <input 
     type={type} 
     placeholder={placeholder} 
     onChange={onChange}
     name={name}
     className={className}
     value={value}
     />
  )
}
