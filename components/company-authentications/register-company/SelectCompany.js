import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useDispatch, useSelector } from 'react-redux'
import {getCompanies} from "../../../redux/company/companyTypeSlice"


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, companyName, theme) {
  return {
    fontWeight:
      companyName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectCompany() {
  const theme = useTheme();
  const companies=useSelector(state=>state.companies.companies) 
  const dispatch=useDispatch()
  const [companyName, setCompany] = React.useState([]);

  
  const handleChange = (event) => {
   
    const {
      target: { value },
    } = event;
  
    setCompany(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  useEffect(()=>{
      dispatch(getCompanies(companyName))
  },[dispatch,companyName])
  return (
    <div className='w-[100%] relative block'>
      
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={companyName}
          onChange={handleChange}
        >
           <MenuItem disabled value="">
            <em>What type of company</em>
          </MenuItem>
          {companies.map((name) => (
            <MenuItem
              key={name.name}
              value={name.name}
            >
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}