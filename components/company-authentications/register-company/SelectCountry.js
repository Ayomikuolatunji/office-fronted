import React,{useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux'
import {fetchAllcountries} from "../../../redux/country/countryApiSlice"



export default function SelectCountry() {
  const countries=useSelector(state=>state.country.countries) 
  const dispatch=useDispatch()
  const [countryName, setCountry] = React.useState([]);

  
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(()=>{
      dispatch(fetchAllcountries(countryName))
  },[dispatch,countryName])


  return (
    <div className='w-[100%] relative'>
        <select
          value={countryName}
          onChange={handleChange}
          className="w-full p-4 appearance-none bg-gray-50 border border-gray-300 text-gray-900 block"
        >
          <option disabled value="">
            <em>Provide your country </em>
          </option>
          {countries.map((name) => (
            <option
              key={name.name}
              value={name.name}
            >
              {name.name}
            </option>
          ))}
        </select>
    </div>
  );
}