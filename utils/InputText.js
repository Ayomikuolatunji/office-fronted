import React from 'react'
import { TextField } from '@mui/material'

export default function InputText({type,label,onChange,name,value, outlined,...rest}) {
  // className


  return (
     <TextField 
       {...rest}
       type={type} 
       label={label} 
       onChange={onChange}
       name={name}
       value={value}
       variant = {outlined}
       style = {{ margin: "0.6em 0", borderTop: "none", borderLeft: "none", borderRight: "none", borderBottom: "2px solid #e0e0e0" }}
     />
  )
}
