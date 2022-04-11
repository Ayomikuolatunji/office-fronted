import { configureStore } from "@reduxjs/toolkit";
import AllUserSlice from "./AllUser-slice";


export default configureStore({
     reducer:{
         users:AllUserSlice
     }
})