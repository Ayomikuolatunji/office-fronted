import React from 'react'
import Button from '../../../utils/Button'
import CreateTask from './CreateTask'
import SelectTask from "./SelectTask"



const Tasks = () => {

  
  return (
    <main className='tasks-body w-[80%] mx-auto mt-7'>
      {/* header */}
        <div className="create-select-task flex justify-between">
          <div>
           <SelectTask/>
          </div>
          <div>
             <CreateTask/>
          </div>           
        </div>
      {/* end header */}
    </main>
  )
}

export default Tasks