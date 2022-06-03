import styled from "styled-components"

export const Wrapper = styled.div `
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: inherit;
  align-items: center;
  position: relative;

.Title {
    display: block;
    width: 100%;
    position : relative;

    h5{
        text-align: center;
        font-size: 1em;

        padding: 1em;
    }
}

.bottom { 
      color: #F1F5F8;
      padding: 0.45em 0.75em;
      font-size: 1em;
      text-align: center;
      z-index: 2;
      width: 70%;
      margin:0 auto;

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
`

export const SideNav =styled.ul`
   display: flex;
   flex-direction: column;
   justify-content: start;
   margin-top: -200px;
   

   li{
        padding-bottom: 30px;
      a{
        color: #fff;
      }
   }


  .inbox {
      display: flex;
      font-size: 1em;
      text-align: center;
      padding: 0.45em 0;

      a{
        color: #F1F5F8;
        padding-left: 0.35em;
      }

      svg {
    color: #F1F5F8;
      }
  }

`