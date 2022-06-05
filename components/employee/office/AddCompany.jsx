import React, { useState } from 'react'

const AddCompany = () => {
    const [open,setOpen]=useState(false)
//   1. Create a new company
//   2. Add the company to the user's company list
//   3. Add the user to the company's user list

// get the company id
//get company name


  return (
    <div className='w-full border-b-[1px]  flex justify-center items-center py-2'>

        <button className='text-sm rounded-full w-[150px] h-[50px] bg-black text-white'>
            Add company
        </button>
    </div>
  )


}

export default AddCompany