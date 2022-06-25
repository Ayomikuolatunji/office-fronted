import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux'


import {getCompanies} from "../../../redux/company/companyTypeSlice"




export default function SelectCompany() {
  const companies=useSelector(state=>state.companies.companies) 
  const dispatch=useDispatch()
  const [companyName, setCompany] = React.useState([]);

  
  const handleChange = (event) => {
    setCompany(event.target.value);
  };
  useEffect(()=>{
      dispatch(getCompanies(companyName))
  },[dispatch,companyName])

  return (
    <div className='w-[100%] relative block'>
      
      <Box sx={{ minWidth: 120 }}>
        <select
          value={companyName}
          className="w-full p-4 appearance-none bg-gray-50 border border-gray-300 text-gray-500 block border-b-4"
          onChange={handleChange}
        >
           <option disabled value="" className='p-5 bg-black text-white'>
            <em>What type of company</em>
          </option>
          {companies.map((name) => (
            <option
              className='p-3 mb-3'
              key={name.name}
              value={name.name}
            >
              {name.name}
            </option>
          ))}
        </select>
    </Box>
    </div>
  );
}