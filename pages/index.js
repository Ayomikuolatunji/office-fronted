import Head from 'next/head'
import Image from "../public/images/Logo.jpg"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
    <header 
    className={
    `relative 
    block w-screen 
    bg-black 
    text-white`}>
      
      <main className= {
        `relative 
        flex 
        items-center 
        w-full 
        p-1.5`}>

      {/* Logo Section */}
      <section 
      className={
       `h-14 
        w-14
        ml-4 
        mr-6`}>
        <a href='#' className={
          `hover:cursor-pointer`
          }>
          <img src="images/Logo.jpg" 
          alt='Logo image' 
          className={
            `${styles.radius} 
            max-w-full
            h-full 
            block 
            relative 
            w-full 
            object-contain`}/>
        </a>
      </section>

         {/* Midldle */}
         <section className={
           `relative 
            ml-auto 
            mr-16`}>

           <ul className={
             `flex 
              relative 
              w-full 
              justify-between 
              items-center`}>
             <li>
               <a href='#' className={`text-white ${styles.link}`}>Product</a>
             </li>

             <li>
               <a href='#' className={`text-white ${styles.link}`}>Resources</a>
             </li>

             <li>
               <a href='#' className={`text-white ${styles.link}`}>Support</a>
             </li>

             <li>
               <a href='#' className={`text-white ${styles.link}`}>Premium</a>
             </li>
           </ul>
         </section>
      </main>

    </header>

   <div className= {`${styles.color1} w-screen h-screen relative flex justify-center items-center`}>
     
     <div><h3>Hello </h3></div>
     
     <h1>Hi sir</h1>
    </div>
    </>
     )
}
