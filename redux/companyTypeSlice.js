import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { allIndustriesApi } from "../api/other-api";


const initialState={
    companies:[],
    selectedCompany:"",
    isCompanyLoading:true
}
export const getCompanies=createAsyncThunk("companies/getCompanies",async(name)=>{
    console.log(name)
    const res=await axios(allIndustriesApi)
    return res.data
})

const companySlice=createSlice({
    name:"companies",
    initialState,
    reducers:{
        SelctedCompany:(state,action)=>{
            state.selectedCompany=action.payload
        }
    },
    extraReducers:{
       [getCompanies.fulfilled]:(state,action)=>{
           console.log(action.payload)
            state.companies=action.payload.industries
            state.isCompanyLoading=false
       },
       [getCompanies.pending]:(state)=>{
           state.isCompanyLoading=true
       },
       [getCompanies.rejected]:(state)=>{
           state.isCompanyLoading=false
       }
    }
})
export const {SelctedCompany}=companySlice.actions
export default companySlice.reducer