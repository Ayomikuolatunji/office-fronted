import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { employeeCompanies } from "../../hooks/employeeApis";




export const fetchEmployeeCompanies=createAsyncThunk("employeeInfo/fetchEmployeeCompanies",async(_, thunkAPI)=>{
    const res=await axios(`${employeeCompanies}/${thunkAPI.getState().employeeAuth.credentials.employeeId}`)
    return res.data
})


const employeeCompanyInfo=createSlice({
    name:"employeeCompanyInfo",
    initialState:{
        employeeCompanies:[],
        selectedCompany:null,
    },
    reducers:{
        getSelectedCompany:(state,action)=>{
            state.selectedCompany=action.payload
        },
        clearSelectedCompany:(state)=>{
            state.selectedCompany=null
        },
        clearEmployeeCompanies:(state)=>{
            state.employeeCompanies=null
        }
    },
    extraReducers:{
        [fetchEmployeeCompanies.fulfilled]:(state,action)=>{
            state.employeeCompanies=action.payload
        }
    }
})

export const {getSelectedCompany,clearSelectedCompany,clearEmployeeCompanies}=employeeCompanyInfo.actions
export default employeeCompanyInfo.reducer