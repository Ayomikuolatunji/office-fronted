import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"


const url='localhost:8080/office-api/all-country-list'
const initialState={
    companies:[],
    selectedCompany:"",
    isCompanyLoading:true
}
export const getCompanies=createAsyncThunk("companies/getCompanies",async()=>{
    const res=await axios(url)
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
            state.companies=action.payload
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