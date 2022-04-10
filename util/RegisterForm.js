import React from 'react'

export default function RegisterForm({children,onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
        {children}
    </form>
  )
}
