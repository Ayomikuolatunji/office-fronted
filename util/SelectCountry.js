import React,{useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllcountries} from '../redux/countryApiSlice'

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


function getStyles(name, countryName, theme) {
  return {
    fontWeight:
      countryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const countries=useSelector(state=>state.country.countries) 
  const dispatch=useDispatch()
  const [countryName, setCountry] = React.useState([]);

  
  const handleChange = (event) => {
   
    const {
      target: { value },
    } = event;
  
    setCountry(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(()=>{
      dispatch(fetchAllcountries(countryName))
  },[dispatch,countryName])
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple={false}
          displayEmpty
          value={countryName}
          onChange={handleChange}
          input={<OutlinedInput />}
          className="bg-gray-100 border-gray-200 border-[1px] w-[100%]"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select country</em>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Provide your country </em>
          </MenuItem>
          {countries.map((name) => (
            <MenuItem
              key={name.name}
              value={name.name}
              style={getStyles(name.name, countryName, theme)}
            >
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}