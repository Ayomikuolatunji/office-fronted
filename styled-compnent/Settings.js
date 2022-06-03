import styled from "styled-components"

export const Settings = styled.div `
position: relative;
width: 100%;
height: inherit;
display: flex;
`

export const Setter = styled.div`
 position: relative;
  text-align: center;
  background-color: #DCDBE4;
  width: 20%;

  .settings-overlap {
    font-size: 1.5em;
    font-weight: normal;
    font-family: sans-serif;
    text-transform: capitalize;
    /* padding: 1em 0.75em; */
    margin : 1em 0;
  }

  .underline {
      width: 4em;
      height: 0.25em;
      background-color: #7B544B;
      position: relative;
      margin: auto;
      border-radius: 1em;
  }

  ::after {
      content: "";
      height: calc(100vh - 8em);
      width : .15em;
      border-radius: .45em;
      top: 0;
      background-color: #997965;
      display: block;
      right: 0;
      position: absolute;
  }
`

export const UserSettings = styled.div`
 width : 80%;
 /* margin-left: auto; */

 .user-settings {
     margin-top: 2em;
     margin-left: 3em;
     position: relative;
     display: block;
 }
`

export const ImgSettings = styled.div`
  display: flex;
  position: relative;

  .img-container {
      width: 4em;
      background-color: red;
      height : 4em;
      vertical-align: middle;
      border-radius: 50%;
      border-left-style: dotted;
      border-left-width: 0.3em;
      border-left-color: green;
      margin-right: 2em;
  }
   
   .buttons {
       display: flex;
       flex-direction: column;
   }

   .button {
       padding: 0.45em 1em;
       margin-top: 0.25em;
       border-radius: 0.5em;
       font-size: 0.85em;
       background-color: gold;
       color: white;
   }

   .change {
       background-color: #2B293E;
   }

   .delete {
       color: #2B293E;
       background-color: inherit;
       border : 0.1em solid black
   }
`

export const Data = styled.form`
    position: relative;
    display: block;

    .control {
        display: flex;
        position: relative;
        justify-content: space-around;
        margin-top: 1em;
        width: 100%;
    }

    .form-control {
        /* margin-right: 2em; */
        margin-top: 1em;
        padding: 0.45em 0.75em;

        .lap {
            display: flex;
             justify-content: space-between; 

            .label {
                display: block;
            }
        }

        .input {
            padding-left: 0.75em;
            
        }

        .icon {
            display: inline-block;
            margin-left: auto;
            
        }
    }
`