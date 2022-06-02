import styled from "styled-components"

export const Wrapper = styled.div `
position: relative;
width : 100%;
display : block;
height : 100%;

.Title {
    display: block;
    width: 100%;
    position : relative;

    h5{
        text-align: center;
        font-size: 1em;
        background-color: #F1F5F8;
        padding: 1em;
    }
}
`

export const SideNav =styled.nav`
width: 100%;
position: relative;
height: 100%;
display: block;
margin-top: 2em;

.SideNavList {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  width: 100%;
  height: 100%;

  .bottom {
      margin-top: auto;
      margin-bottom: 10rem;
      color: #F1F5F8;
      padding: 0.45em 0.75em;
      font-size: 1em;
      text-align: center;

       .bottom-item {
           display: flex;
           flex-direction: row;
           justify-content: space-around;
           align-items: center;
           padding: 0.45em 0.45em;
           border-radius: 1.75em;
           cursor: pointer;
           border: 0.12em solid #F1F5F8;
           transition: background .2s ease;
           :hover {
               background-color: black;
               
           }
       }

       
       
  }

  .Found {
      display: flex;
      font-size: 1em;
      text-align: center;
      padding: 0.45em 0.75em;

      a{
        color: #F1F5F8;
        padding-left: 0.35em;
      }

      svg {
    color: #F1F5F8;
      }
  }

}
`

export const MappedArray = styled.li `
  position: relative;

  a {
      display: block;
      color: #F1F5F8;
      font-size: 1em;
      text-align: center;
      padding: 0.45em 0.75em;
      width: 100%;
  }
`