import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const FetchUserId=createAsyncThunk()

const employeeInfo=createSlice({
    name:"employeeInfo",
    initialState:{
        employeeId:""
    },
    reducers:{
        getEmployeeId:(state,action)=>{
              //note it can be use when employee login and signup 
            state.employeeId=action.payload
        },
        clearEmployeeId:(state)=>{
            // clear employeeid when employee finish signingup
            state.employeeId=""
        }
    }
})
export const {getEmployeeId,clearEmployeeId}=employeeInfo.actions
export default employeeInfo.reducer