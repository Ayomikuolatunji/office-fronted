import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {MdOutlineAssignmentTurnedIn} from "react-icons/md";
import Button from "../../../utils/Button"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid lightgray',
  boxShadow: 24,
};



const CreateTask = () => {
  const [open, setOpen] =useState(false);

   




  return (
    <div>
      {/* create task modal */}
       <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
              <div className="create-task-container">
                <div className="create-a-new-task w-full border-b-2 p-3 font-serif">
                   <div className='flex items-center justify-center '>
                    <MdOutlineAssignmentTurnedIn className='text-blue-500 text-3xl'/>
                     <span className='text-gray-800 text-4xl'>Create a new task</span>
                   </div>
                </div>
                <div className="task-title w-full p-3 flex flex-col">
                  <label>Task Title</label>
                  <input type="text" 
                  placeholder="Enter task title" 
                  className="w-full border-b-2 p-2"
                  />
                </div>
                <div className="task-description">
                  <label>Task Description</label>
                  <textarea placeholder="Enter task description" />
                </div>
                <div className="task-deadline">
                  <label>Task Deadline</label>
                  <input type="date" />
                </div>
                <div className="department-of-that-needs-the-task">
                  <label>Department of that needs the task</label>
                  <input type="text" placeholder="Enter department name" />
                </div>
              </div>
          </Box>
        </Modal>
      {/* end create task modal */}
        <Button  
            className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md font-serif'
            text='Create Task'
            onClick={()=>setOpen(true)}
          />
    </div>
  )
}  

export default CreateTask