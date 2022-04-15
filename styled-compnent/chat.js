import styled from "styled-components"


export const ChatContainer=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    background-color: #131342;

.container{
    gap: 1rem;
    position: relative;
    background-color: #00000076;
    padding: 2rem 1rem;
    width: 90vw;
    height: 85vh;
    display: grid;
    grid-template-columns: 25% 75%;

    @media (max-width:1080px) and (min-width:720px){
        grid-template-columns: 35% 65%;
    }
}
`
export const ContactDiv=styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  width: 100%;
  border-right:3px solid #131342;

  .brand{
      h1{
          font-size: 30px;
          text-align: center;
      }
  }

  .contacts{
       display: flex;
       gap: 0.8rem;
       height:70vh;
       flex-direction: column;
       overflow: auto;
       ::-webkit-scrollbar{
           width: 0.4rem;
           &-thumb{
            background-color: #ffffff39;
            width: 0.1rem;
            border-radius: 1rem;
           }
       }
       .contact {
         display: flex;
         align-items: center;
         cursor: pointer;
         transition: 0.5s ease-in-out all;
         width: 95%;
         min-height: 5rem;
         background-color: #ffffff39;
         gap: 0.76rem;
         img{
           height: 3rem;
         }
         .userName{
             h1{
                color: #fff;
             }
         }
       }

       .selected{
          border: 0.4rem solid #997af0;
          background-color: green;          
         }
     }

    
`
export const Profilestyle=styled.div`
         cursor: pointer;
         display: flex;
         justify-content:space-between;
         padding: 0.3rem 3rem 0.3rem 0;
         align-items: center;
        
         .avatar{
             display: flex;
             align-items: center;
             gap: 1rem;
             img{
                 height: 4rem;
                 max-inline-size: 100%;
             }
         }
         .userName{
             color: #fff
         }
         @media (max-width:1080px) and (min-width:720px){
              gap: 1rem;
         }
`
export const SingleChatDiv=styled.div`
    padding-top: 1rem;
     position: relative;
     .chat-header{
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 0.2rem;
         .user-details{
             display: flex;
            align-items: center;
            gap: 1rem;

            .avatar{

                img{
                    height: 3rem;
                }
            }
            .username{
                h1{
                    color: #fff;
                    font-size: large;
                    font-weight: bolder;
                }
            }
         }
     }
`

export const ChatBillDiv=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  font-weight: bolder;
  font-size: 2rem;

  h1{
      span{
          color: purple;
      }
  }
`

export const InputContainerStyle=styled.div`
      display: grid;
      padding: 0.2rem;
      background-color: #fff;
      width: 95%;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 10px;

      .form-input{
        width: 90%;
        border-radius: 2rem;
        background-color: transparent;
        display: flex;

        .react-input-emoji--button{
        background-color:transparent !important;
        position:absolute;
        left:0;
        margin: 450px;
        z-index: 99;
      }
        .react-input-emoji--input {
          height: 50px;
          padding: 15px;
        }
         
      }
  
`

export const Message=styled.div`
    overflow: auto;
    ::-webkit-scrollbar{
           width: 0.5rem;
           &-thumb{
            background-color: #ffffff39;
            width: 0.1rem;
            border-radius: 1rem;
           }
       }
  overscroll-behavior-y: contain;
  scroll-snap-type: y proximity;
    padding: 1rem 2rem;
    display: flex;
    width: 100%;
    height: 50vh;
    gap: 1rem;
    flex-direction: column;
    .msg{
        display: flex;
        align-items: center;

        .content{
            max-width: 40%;
            overflow-wrap: break-word;
            padding: 1rem;
            font-size: 1rem;
            border-radius: 1rem;
            color: #fff;
            font-weight: bold;
        }
    }
    .sent{
        justify-content: flex-end;

        .content{
            background-color:#4f04ff21 
        }
    }
    .received{
        justify-content: flex-start;
 
        .content{
            background-color:#4f04ff21 
        }
    }
    :last-child{
        scroll-snap-align: end;
    }
`

