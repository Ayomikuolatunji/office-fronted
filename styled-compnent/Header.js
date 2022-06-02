import styled from "styled-components"

export const HeaderPage = styled.div `
  width: 100%;
  position: relative;
  display: block;
   background: #72a1e5;
`

export const InnerPage = styled.div `
  width: 100%;
  position: relative;
  height: 100%;

  main {
      display: block;
      width : 100%;
      position: relative;
  }

  header {
      display : flex;
      flex-direction: row;
      align-items: center;
      width : 95%;
      margin: auto;
      padding-top : 0.45em;
      padding-bottom : 0.45em;
      /* justify-content: space-evenly; */
  }

  .formContainer {
      width: 50%;
      margin-left: 1rem;
      margin: auto;
   
      form {
          display: flex;
          align-items: center;
          justify-content: space-between;

      }
  }

  #form2 {
      padding : 0.65em 0.75em !important;
    
  }
`

export const Communication = styled.div `
margin-left: auto;
margin-right : 1rem;

justify-content: space-between;
align-items: center;
display: flex;
padding: 1em;

.Link {
    margin-right:  1.5em;
    font-size: 1.3em;
    border-radius: 50%;
    color: black;
    object-fit: contain;
    text-align: center;
    position: relative;
    cursor: pointer;
}


.absolute-not {
        color: white;
        position: absolute;
        top : 0.75rem;
        right : 4rem;
        margin-bottom: 1rem;
        vertical-align: middle;
        margin: auto;
        border-radius: 50%;
        text-align: center;
    }
`

export const Profile = styled.div`
position: relative;
margin-right: 1.5em;
`