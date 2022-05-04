import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { employee } from "../../api/authApi";

export const getEmployeeData=createAsyncThunk("employeeInfo/getEmployeeData",async(_, thunkAPI)=>{
    const {employeeId}=thunkAPI.getState().employeeInfo
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
            state.employeeData=""
        }
    },
    extraReducers:{
        [getEmployeeData.fulfilled]:(state,action)=>{
              console.log(action.payload)
             state.employeeData=action.payload
        }
    }
})
export const {getEmployeeId,clearEmployeeId}=employeeInfo.actions
export default employeeInfo.reducer