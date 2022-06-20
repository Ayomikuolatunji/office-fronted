import React,{useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
    <div className='w-[100%]'>
      <FormControl style={{width:"100%"}}>
        <Select
          multiple={false}
          displayEmpty
          value={companyName}
          onChange={handleChange}
          input={<OutlinedInput />}
          className="bg-gray-100 border-gray-200 border-[1px] "
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Company type</em>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>What type of company</em>
          </MenuItem>
          {companies.map((name) => (
            <MenuItem
              key={name.name}
              value={name.name}
              style={getStyles(name.name, companyName, theme)}
            >
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}