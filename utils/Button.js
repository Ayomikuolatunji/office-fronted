
import React from 'react'
import CircleProgressbar from './materialUi/CircleProgressBar'

export default function Button({className,text,onClick,loading}) {
  return (
      <button className={className} onClick={onClick}>
          {loading?<CircleProgressbar/>:text}
      </button>
  )
}