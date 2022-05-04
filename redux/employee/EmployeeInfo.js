import { createSlice } from "@reduxjs/toolkit";

const employeeInfo=createSlice({
    name:"employeeInfo",
    initialState:{
        employeeId:""
    },
    reducers:{
        getEmployeeId:(state,action)=>{
            state.employeeId=action.payload
        }
    }
})