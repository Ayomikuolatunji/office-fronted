/* eslint-disable @next/next/no-img-element */
import { Modal, Button,useModal} from "@nextui-org/react";
import React,{useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ButtonText from "../../util/Button"
import {Modalcontainer} from "../../styled-compnent/index"
import { updateProfileModal } from "../../redux/AllUser-slice";
import {profile} from "../../api/authApi"




export default function MuiModal() {
  const [visible, setVisible] = React.useState(true);
  const { bindings } = useModal();
  const defaultImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU'
  const [user,setUser]=useState([])
  const dispatch=useDispatch()

   const handler = () => {
    dispatch(updateProfileModal(false))
     setVisible(false)
  
  }
  useEffect(()=>{
    const userId=localStorage.getItem("userId")
     fetch(`http://localhost:8080/office-api/auth/${JSON.parse(userId)}`)
     .then(res=>{
       return res.json()
     })
     .then(data=>{
       setUser(data)
     })
     .catch(err=>{
       console.log(err.message)
     })
  },[])

  const proflePicture=async()=>{
    try{
      if(user){
        const res=await axios.post(`${profile}/${user.user._id}`,{

          avartImage:defaultImg,
          avatarImageSet:true
        })
        if(res.status===200){
          router.push("/")
        }
      }
      }catch(err){
        console.log(err.message)
        
      }
}

  return (
    <div>
      <Modal
        fullScreen
        animated={false}
        aria-labelledby="modal-title"
        {...bindings}
        open={visible}
      >     
        <Modal.Body>
          <Modalcontainer>
              <div className="thumbnail-img mx-auto  flex flex-col items-center">
                <img src={defaultImg} className={`${defaultImg?      "border-red border-4":""}`} style={{width:"200px", borderRadius:"100%",height:"200px"}} alt="avatar"/>
                <label htmlFor="file" className='flex justify-center flex-col items-center  file z-[999]  cursor-pointer'>
                
                 <span className='text-lg text-white'> Upload profile picture</span>
                </label>
               </div>
              <ButtonText 
                text={"Set Profile Picture"}
                onClick={handler}
                type="submit"
              />    
           </Modalcontainer>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>proflePicture()}>Skip</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
