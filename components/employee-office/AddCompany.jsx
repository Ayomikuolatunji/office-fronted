import React,{ useState,useCallback } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { add_new_company } from '../../hooks/employeeApis';
import { FormLogicHook } from '../../helpers/FormLogicHook';
import { fetchEmployeeCompanies } from '../../redux/employee/employeeCompanySlice';


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
    const {values,handleChange}=FormLogicHook()
    const employeeCompaines=useSelector(state=>state.employeeInfo.employeeCompanies)
    const [loading,setLoading]=useState(false)
    const [open,setOpen]=useState(false)
    const [error,setError]=useState('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch=useDispatch()     
   //   1. Create a new company
  //   2. Add the company to the user's company list
  //   3. Add the employee to the company's user list

  // get the company id
  //get company name
  const addNewCompany=async()=>{
      setLoading(true)
      setError("")
     try {
       const response=await axios.post(`${add_new_company}/${employeeId}`,{
            companyId:values.company_id.trim(),
            company_name:values.company_name.trim()
       })
       setLoading(false)
       if(response.status===200){
          setError("")
          dispatch(fetchEmployeeCompanies())  
          handleClose()
       }
     } catch (error) {
      if( error.response ){
        setLoading(false)
        console.log(error.response.data); // => the response payload 
        setError(error.response.data.message)}
     } 
    
  }


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
                          type="password"
                          placeholder="Company Id"  
                          className="w-full border-2 p-2 mb-5"
                          values={values.company_id}
                          name="company_id"
                          onChange={handleChange}
                        />
                    </div>
                    <div className="add-company-modal-body-input">
                        <input 
                        type="text" 
                        placeholder="Company Name"
                        className="w-full border-2 p-2 mb-5" 
                        values={values.company_name}
                        name="company_name"
                        onChange={handleChange}
                        />
                    </div>
                    <div className="error my-3 text-red-500 text-center">
                       <span>
                         {error}
                       </span>
                    </div>
                    <div className="btn w-full">
                        <button 
                        onClick={addNewCompany}
                        className="btn-primary bg-blue-500 block w-full p-3 text-[white] hover:bg-[blue]">
                            {loading?<span className="spinner">Please wait...</span>:<span>Add Company</span>}
                        </button>
                    </div>
                </div>
            </div>
         </div>
       </Box>
      </Modal>
    </div>
         <div className='w-full flex justify-between'>
               <button   className='p-3 text-[white] bg-blue-500 w-full text-center'>
                 {
                   employeeCompaines?.employee_companies.length==0?"No company available":"Current companies"
                 }

               </button>
                <button 
                className='p-3 text-blue-500 border-blue-500 w-full text-center hover:bg-blue-500 hover:text-white border-2'
                onClick={handleOpen}
                >
                    Join your company
                </button>
         </div>
    </>
  )


}

export default AddCompany