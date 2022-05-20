import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { employee } from "../../api/authApi";

export const getEmployeeData=createAsyncThunk("employeeInfo/getEmployeeData",async(_, thunkAPI)=>{
    const {employeeId}=thunkAPI.getState().employeeAuth.credentials
    const res=await axios(`${employee}/${employeeId}`)
    return res.data
})

const employeeInfo=createSlice({
    name:"employeeInfo",
    initialState:{
        employeeData:null,
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
    },
    extraReducers:{
        [getEmployeeData.fulfilled]:(state,action)=>{
             state.employeeData=action.payload.user
        }
    }
})
export const {getEmployeeId,clearEmployeeId}=employeeInfo.actions
export default employeeInfo.reducer