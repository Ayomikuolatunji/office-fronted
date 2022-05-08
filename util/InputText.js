import React from 'react'
import { TextField } from '@mui/material'

export default function InputText({type,label,onChange,name,value, outlined}) {
  // className


  return (
     <TextField 
     type={type} 
     label={label} 
     onChange={onChange}
     name={name}
     value={value}
     variant = {outlined}
     style = {{ margin: "0.6em 0"}}
     fullWidth
     />
  )
}
