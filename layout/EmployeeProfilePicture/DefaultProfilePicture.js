/* eslint-disable @next/next/no-img-element */
import { Modal, Button,useModal} from "@nextui-org/react";
import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import ButtonText from "../../util/Button"
import {Modalcontainer} from "../../styled-compnent/index"
import { clearEmployeeId} from "../../redux/employee/employeeInfoSlice";
import Image from 'next/image'
import {FcOldTimeCamera} from "react-icons/fc"
import CircleProgressbar from "../../components/materialUi/CircleProgressBar"




export default function MuiModal() {
  const [visible, setVisible] = React.useState(true);
  const { bindings } = useModal();
  const [loading ,setLoading]=useState(false)
  const defaultImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU'
  const employeeId=useSelector(state=>state.employeeInfo.employeeId)
  const router=useRouter()  
  const dispatch=useDispatch()



   const handleUpload = (uploadEvent) => {
    uploadEvent.persist();
    setLoading(true)
    const [file] = uploadEvent.target.files;
    const reader = new FileReader();
    reader.onloadend =(onLoadEndEvent) => {
      const graphQuery={
        query:`
        mutation {
         update_Profile_Picture(id: "${employeeId}", update_picture: {key:"${file.name}", data:"${onLoadEndEvent.target.result.split(",")[1]}"}) {
           _id
         }
       }  
        `
       }
        fetch("http://localhost:8080/graphql",{
          method:"POST",
          mode: "cors",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(graphQuery)
        })
        .then(res=>{
          return res.json()
        })
        .then(data=>{
          console.log(data)
          setLoading(false)
          dispatch(getEmployeeData())
        })
        .catch(err=>{
           setLoading(false)
          console.log(err.message)
        })
       }
    reader.readAsDataURL(file);
  };



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
          <div className='relative w-[200px] h-[200px] self-center'>
                <div className='absolute z-50 top-[40%] left-[35%]'>
                {loading && <CircleProgressbar/>}
                </div>
                {/* <Image src={employeeData.avartImage} alt={employeeData.username} layout='fill' className={`${loading ? "hidden" :" block"} rounded-[50%]`} /> */}
                <label htmlFor="files" className='text-5xl absolute bottom-0 right-0 mr-3x]'>
                  <FcOldTimeCamera className='text-6xl my-3 cursor-pointer'/>
                  <input
                    type={"file"} 
                    id='files' 
                    className='hidden'
                    onChange={(e)=>handleUpload(e)} 
                  />
              </label>
          </div>
              <ButtonText 
                text={"Set Profile Picture"}
               
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
