import React from 'react'
import InputText from "../../util/InputText" 
import {BsSearch} from "react-icons/bs"


export default function Search({handleSearch,contact}) {
  return (
    <div className='my-6 mx-auto w-full relative'>
        <InputText 
        type={"text"} 
        className="w-11/12 ml-2 rounded-md mx-auto text-sm indent-6 p-3 text-gray-900" 
        placeholder={"Search or start a new chat"}
        onChange={(e)=>handleSearch(e)}
        value={contact}
        />
        <BsSearch className='absolute top-0 left-0 text-teal-700 ml-3 mt-2.5 text-2xl'/>
    </div>
  )
}
