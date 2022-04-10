import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Button from '../../util/Button'
import InputText from '../../util/InputText'

export default function index() {

 const submitUserInfo=(e)=>{
     e.preventDefault()
 }
 const handleChange=(e)=>{

 } 
  return (
    <RegisterMain>
         <div className="brand">
            <h1>New EMployee Registration</h1>
        </div>
         <form onSubmit={submitUserInfo}>
              <InputText 
                type={"text"}
                onChange={()=>handleChange(e)}
                name={"name"}
                placeholder={"Enter your user name"}
              />
                <InputText 
                type={"email"}
                onChange={()=>handleChange(e)}
                name={"email"}
                placeholder={"Enter your email address"}
              />
              <InputText 
                type={"password"}
                onChange={()=>handleChange(e)}
                name={"password"}
                placeholder={"Enter your password"}
             />
             <InputText 
                type={"text"}
                onChange={()=>handleChange(e)}
                name={"confirmPassword"}
                placeholder={"Comfirm your password"}
              />
              <Button text={"Register"} className={""}/>
              <span>Already have an account ? <Link href={"/login"} passHref>Login</Link> </span>
         </form>
    </RegisterMain>
  )
}


const RegisterMain=styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 1rem;
     justify-content: center;
     background-color: #131342;

     .brand{
          h1{
              color: #fff;
              font-size: 30px;
              text-transform: uppercase;
          }
     }
     form {
         display: flex;
         justify-content: center;
         flex-direction: column;
         gap: 2rem;
         background-color: #00000076;
         padding: 2rem 3rem;

         input{
             background: transparent;
             padding: 1rem;
             border: 0.1rem solid #4e0eff;
             border-radius: 0.4rem;
             color: #fff;
             width: 100%;
             font-size: 1rem;

             &:hover{
                 border: 1px solid #997af0;
                 outline: none;
             }
         }

         button{
            background-color: #997af0;
            border-radius: 0.4rem;
            cursor: pointer;
            text-transform: uppercase;
            color: #fff;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: bold;
            color: #fff;
            border: none;
            transition: 0.5s ease-in-out;
            &:hover{
                background-color: #4e0eff; 
            }
         }
         span{
             color: white;
             text-transform: uppercase;
             a{
                 color: #4e0eff;
             }
         }
     }
`