import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components"

export default function Profile() {
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
  console.log(employeeData);
  return (
    <div>Profile</div>
  )
}

const ProfileContainer=styled.div`
    

`


