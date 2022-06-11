import * as React from 'react';




export default function Signin() {

  return (
    <div className='mr-4'>
       <select name="login" id="" className={"rounded-sm mt-2 border-2 border-[green] flex justify-between px-2 py-2 w-[150px] bg-black text-green-500"}>
           <option value="default">Signin</option>
           <option value="login">
             Login as employee
           </option>
           <option value="login">
             Login as admin
           </option>
       </select>
    </div>
  );
}
