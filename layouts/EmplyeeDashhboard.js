import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmployeeData } from '../redux/employee/employeeInfoSlice'
import Sidebar from './Sidebar'

// import { Header } from '../components/employee/Header/Header'
// import { Copyright } from '@mui/icons-material'


export default function MainEmplyeeDashhboard({children}) {
    const dispatch=useDispatch()
  
    useEffect(()=>{
        dispatch(getEmployeeData())
    },[dispatch])
    
  return (
    <div className='h-[100vh] w-[100%] bg-[#03284d] flex justify-center'>
     
            <div className='w-[80vw] m-auto h-[70vh] flex justify-between items-center bg-[#94A8B6]'>
                <div 
                className='relative w-[15%] h-[100%] bg-[#797878]'
                >
                  <Sidebar/>
                </div>
                <main 
                  className='w-[85%] h-[inherent] justify-center m-[auto] bg-[#F1F5F8]'
                >
                  {children}
                </main>
            </div>
        {/* <Footer> 
          <p>All right reserved <Copyright /></p>
        </Footer>  */}
    </div>
  )
}


// const MainDiv=styled.div`
//    display: block;
//    height: 100vh;
//    width: 100%;
//    display: flex;
//    background-color: #03284d;
//    flex-direction: column;
//     align-items: center;
// `

// const ContainerDiv=styled.div`
//    width: 75%;
//    height: 80vh;
//    margin: auto;

//   @media(min-width: 1850px){
//     width: 85%;
//   }

// `

// const InnerDiv=styled.div`
//     width: 100%;
//     height: inherit;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background : #94A8B6;

//     .SidebarLayer {
//         position :  relative;
//         width : 15%;
//         height: 100%;
//     }

//     main{
//         width: 85%; 
//         background-color: #F1F5F8;
//         margin: auto;
//         height: inherit;
//         display: flex;
//         justify-content: center;
        
//     }
// `

// const Footer = styled.footer `
//   width: 100%;
//   text-align: center;
//   position: relative;
//   margin: auto;
//   p {
//     margin: 0;
//     padding-top: 0.45em;
//     color: #fff
//   }
  
// `