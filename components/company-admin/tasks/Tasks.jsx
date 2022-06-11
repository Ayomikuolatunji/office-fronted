import React from 'react'
import Button from '../../../utils/Button'
import SelectTask from "SelectTask"



const Tasks = () => {

  
  return (
    <main className='tasks-body w-[80%] mx-auto mt-7'>
        <div className="create-select-task flex justify-between">
          <div>
           <SelectTask/>
          </div>

          <Button  className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md font-serif'
            text='Create Task'
          />
        </div>
    </main>
  )
}

export default Tasks