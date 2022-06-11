import * as React from 'react';




export default function Signin() {

  return (
    <div>
       <select name="login" id="" className={"rounded-lg mt-2 border-2 border-green-500  flex justify-between px-5 py-2 w-[150px] bg-black"}>
           <option value="">Login</option>
           <option value="login">
                Login as employee
           </option>
       </select>
    </div>
  );
}
