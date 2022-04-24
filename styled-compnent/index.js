import styled from "styled-components"



export const RegisterMain=styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 1rem;
     justify-content: center;
 
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
             a{
                 color: #4e0eff;
                 text-decoration:none;
                 font-weight: bold;
             }
         }
     }
`

export const Container=styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 3rem;
     background-color: #131324;
     position: relative;
     height: 100vh;

     .title {
        h1{
           color: #fff;
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
`
export const Modalcontainer=styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 3rem;
     background-color: #131324;
     position: relative;
     height: 80vh;

     .title {
        h1{
           color: #fff;
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
`
