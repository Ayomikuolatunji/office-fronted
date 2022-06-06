import {createSlice } from "@reduxjs/toolkit";


const employeeCompanyInfo=createSlice({
    name:"employeeCompanyInfo",
    initialState:{
        selectedCompany:null,
    },
    reducers:{
        getSelectedCompany:(state,action)=>{
            state.selectedCompany=action.payload
        }
    },
})

export const {getSelectedCompany}=employeeCompanyInfo.actions
export default employeeCompanyInfo.reducer