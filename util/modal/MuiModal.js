/* eslint-disable @next/next/no-img-element */
import { Modal, Button,useModal} from "@nextui-org/react";
import React from "react";
import ButtonText from "../../util/Button"
import {Modalcontainer} from "../../styled-compnent/index"
import { useDispatch } from "react-redux";
import { updateProfileModal } from "../../redux/AllUser-slice";



export default function MuiModal({proflePicture}) {
  const [visible, setVisible] = React.useState(true);
  const { bindings } = useModal();
  const dispatch=useDispatch()

   const handler = () => {
    dispatch(updateProfileModal(false))
     setVisible(false)
  
    }

  const defaultImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU'



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
