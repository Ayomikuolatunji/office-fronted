/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import {Links} from "../components/RootMenu/IndexMenu"

import Signin from '../components/hompage-signin/SIgnin';

export default function Home() {


  return (
      <>
      <div className={`w-screen ${styles.container} h-screen`}>
        <header 
        className={`relative block w-screen  bg-black 
        text-white`}>
        <main className= { `relative flex w-full justify-between px-5 py-5`}>
          {/* Logo Section */}    
          <section 
          className={ `h-14 w-14`}>
            <a href='#' className={
              `hover:cursor-pointer`
              }>
              <img src="images/Logo.jpg" 
              alt='Logo image' 
              className={`${styles.radius} max-w-full h-full  block relative w-full object-contain`}
              />
            </a>
          </section>

            {/* Midldle */}
            <section className={`relative`}>
              <ul className={`flex relative w-full justify-between 
                items-center`}>
                {Links.map((link) => {
                  const {id, name, path} = link
                  return (
                    <li key={id}>
                      <a href = {path} className= {`${styles.link} text-white`}>{name}</a>
                    </li>
                  )
                })}
              </ul>
            </section>
            {/* signin */}
            <Signin/>        
          </main>

        </header>

      <div className= {` ${styles.container} w-screen relative flex 
    `}>

        <div className={`relative  ${styles.center}  w-screen flex  justify-center bg-black text-white  items-center flex-col`}>
          <div className={`${styles.negative} text-center`}>
            <h2 className={`p-1`}>Create your Account </h2>
            <p className={`p-1`}>setup your Company Database and 
              have a easy flow of communication with your employees at a faster pace
              </p> 
          </div>

          <div className={`w-full relative block`}>
            <div className={`flex justify-between items-stretch w-3/5 mx-auto text-center md:flex-col`}>
                <div className={`w-6/12 mx-2 md:w-full mb-3`}>
                  <Button href="#outlined-buttons" 
                  className={`w-3/5`}
                  sx = {{padding : "1em", color :"white"}} variant = "outlined" color = "success">
                      Sign up as an Employee
                  </Button>
                </div>

                <div className={`w-6/12 mx-2 md:w-full`}>
                    <Button href="#outlined-buttons" 
                          className={`w-3/5`}
                          sx = {{padding : "1em", color :"white"}} variant = "outlined" color = "success">
                      Sign up as an Admin
                    </Button>
                </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
     )
}
