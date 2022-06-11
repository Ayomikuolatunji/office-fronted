import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from "../../../utils/Button"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '1px solid lightgray',
  boxShadow: 24,
  p: 2,
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
                <div className="create-a-new-task w-full p-3 text-center">
                   <h4>Create a new task</h4>
                </div>
                <div className="task-title">
                  <label>Task Title</label>
                  <input type="text" placeholder="Enter task title" />
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