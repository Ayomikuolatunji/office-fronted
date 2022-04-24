/* eslint-disable @next/next/no-img-element */
import { Modal, Button, Text } from "@nextui-org/react";
import {FcOldTimeCamera} from "react-icons/fc"
import React from "react";
import ButtonText from "../../util/Button"
import {Modalcontainer} from "../../styled-compnent/index"



export default function MuiModal({proflePicture}) {
  const [visible, setVisible] = React.useState(true);
  const handler = () => setVisible(false);

  const defaultImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU'

  return (
    <div>
      <Modal
        fullScreen
        animated={false}
        aria-labelledby="modal-title"
        open={visible}
      >
       
        <Modal.Body>
          <Modalcontainer>
              <div className="thumbnail-img mx-auto  flex flex-col items-center">
                <img src={defaultImg} className={`${defaultImg?      "border-red border-4":""}`} style={{width:"200px", borderRadius:"100%",height:"200px"}} alt="avatar"/>
                <label htmlFor="file" className='flex justify-center flex-col items-center  file z-[999]  cursor-pointer'>
                 <FcOldTimeCamera className='text-3xl my-3'/>
                 <span className='text-lg text-white'> Upload profile picture</span>
                  <input
                    type={"file"} 
                    id='file' 
                    className='hidden'
                    // onChange={onImageChange} 
                  />
                </label>
               </div>
              <ButtonText 
              text={"Set as Profile Picture"}
              onClick={proflePicture}
              type="submit"
              />    
           </Modalcontainer>
        </Modal.Body>
        <Modal.Footer>
          <Button flat auto color="error" onClick={() => setVisible(false)}>
            Set profile picture
          </Button>
          <Button onClick={() => setVisible(false)}>Skill</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
