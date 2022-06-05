import React, { useState } from 'react'

const AddCompany = () => {
    const [open,setOpen]=useState(false)
//   1. Create a new company
//   2. Add the company to the user's company list
//   3. Add the user to the company's user list

// get the company id
//get company name


  return (
    <>
        <div className="add-company-modal absolute top-0 left-0 right-0 bottom-0 bg-[transparent] text-white flex justify-center items-center">
            <div className="add-company-modal-content bg-[white]">
                <div className="add-company-modal-header">
                    <h2>Add Company</h2>
                </div>
                <div className="add-company-modal-body">
                    <div className="add-company-modal-body-input">
                        <label>Company Id</label>
                        <input type="text" placeholder="Company Id" />
                    </div>
                    <div className="add-company-modal-body-input">
                        <label>Company Name</label>
                        <input type="text" placeholder="Company Name" />
                    </div>
                </div>
            </div>
         </div>
         <div className='w-full border-b-[1px]  flex justify-center items-center py-2'>
                <button className='text-sm rounded-full w-[150px] h-[50px] bg-black text-white'>
                    Add company
                </button>
         </div>
    </>
  )


}

export default AddCompany