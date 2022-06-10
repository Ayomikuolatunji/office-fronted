import React from "react";
import { Link } from "@nextui-org/react";
// import Errsvg from "../public/images/Errsvg.svg"

 const CustomError=() => {
    return (
        
        <main className="min-h-screen bg-neutral-600 
        flex items-center 
        justify-center
        flex-col 
        bg-[url('../public/images/Errsvg.svg')]
        bg-no-repeat bg-center bg-cover">
            <h2>Hello User</h2>
            <p>The page you are trying to accessing is not Valid</p>
            <a className="text-white" href="https://www.google.com"> Go Home </a>
        </main>
    )
}

export default CustomError