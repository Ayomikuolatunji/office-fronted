import React,{ useState,useCallback } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    p: 4,
  };


const AddCompany = () => {
    const employeeId=useSelector(state=>state.employeeInfo.employeeId)
    const [open,setOpen]=useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
//   1. Create a new company
//   2. Add the company to the user's company list
//   3. Add the user to the company's user list

// get the company id
//get company name

  const addNewCompany=useCallback(async()=>{
     
  })


  return (
    <>
   <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Box style={style}>
       <div className="add-company-modal bg-[transparent] flex justify-center items-center w-full">
            <div className="add-company-modal-content bg-[white] p-4 flex flex-col justify-center items-center w-full">
                <div className="add-company-modal-header mb-3">
                    <h2 className='text-lg'>Add Company with company id and name</h2>
                </div>
                <div className="add-company-modal-body w-full">
                    <div className="add-company-modal-body-input w-full">
                        <input 
                        type="text" 
                        placeholder="Company Id"  
                        className="w-full border-2 p-2 mb-5"
                        />
                    </div>
                    <div className="add-company-modal-body-input">
                        <input 
                        type="text" 
                        placeholder="Company Name"
                        className="w-full border-2 p-2 mb-5" 
                        />
                    </div>
                    <div className="btn w-full">
                        <button 
                        className="btn-primary bg-[#536c7c] block w-full p-3 text-[white] hover:bg-[#477491]">Add compnay</button>
                    </div>
                </div>
            </div>
         </div>
       </Box>
      </Modal>
    </div>
         <div className='w-full border-b-[1px]  flex justify-center items-center py-2'>
                <button 
                className='text-sm rounded-full w-[150px] h-[50px] bg-black text-white'
                onClick={handleOpen}
                >
                    Add company
                </button>
         </div>
    </>
  )


}

export default AddCompany