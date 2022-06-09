import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { employee} from "../../hooks/employeeApis";

export const getEmployeeData=createAsyncThunk("employeeInfo/getEmployeeData",async(_, thunkAPI)=>{
    const {employeeId}=thunkAPI.getState().employeeAuth.credentials
    const res=await axios(`${employee}/${employeeId}`)
    return res.data
})


const employeeInfo=createSlice({
    name:"employeeInfo",
    initialState:{
        employeeData:null,
        loading:false,
        employeeId:"",
    },
    reducers:{
        getEmployeeId:(state,action)=>{
              //note it can be use when employee login and signup 
            state.employeeId=action.payload
        },
        clearEmployeeId:(state)=>{
            // clear employeeid when employee finish signingup
            state.employeeId=""
        },
        clearEmployeData:(state)=>{
            state.employeeData=null
        }
    },
    extraReducers:{
        [getEmployeeData.fulfilled]:(state,action)=>{
            state.loading=false
             state.employeeData=action.payload.user
        },
        [getEmployeeData.rejected]:(state,action)=>{
            state.employeeData=null

        },
        [getEmployeeData.pending]:(state,action)=>{
            state.loading=true
            state.employeeData=null
        }
    }
})
export const {getEmployeeId,clearEmployeeId,getSelectedCompany,clearEmployeData}=employeeInfo.actions
export default employeeInfo.reducer