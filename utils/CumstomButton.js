import React from 'react'
import { Button } from '@mui/material'

// import SX from "../Material-Ui/Login"

export default function CustomButton({variant,text,onClick, type,testid,spinner}) {
  return (
      <Button 
       variant={variant} 
       onClick={onClick} 
       type = {type}
       data-testid={testid}
       color = "primary" 
       fullWidth
       sx = {{padding : "0.75rem"}}
      >
       {text}
       {btn? btn : null}
      </Button>
  )
}
