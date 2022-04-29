import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

const initialState={
    companies:[],
    selectedCompany:""
}
export const getCompanies=createAsyncThunk("companies/getCompanies",async()=>{
    const res=await axios('localhost:8080/office-api/all-country-list')
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

       }
    }
})
export const {SelctedCompany}=companySlice.actions
export default companySlice.reducer