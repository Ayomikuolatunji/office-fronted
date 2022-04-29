import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchAllcountries=createAsyncThunk("country/fetchAllcountries",async()=>{
    res=await axios('https://restcountries.com/v2/all')
    return res.data
})

const countryApiSlice=createSlice({
    name:"country",
    initialState:{
        countries:[],
        isCountyLoading:true,
        seletedCountry:""
    },
    reducers:{
       selectedCountry:(state,action)=>{

       }
    },
    extraReducer:{
       [fetchAllcountries.fulfilled]:(state,{payload})=>{
           state.countries=payload
           state.isCountyLoading=false
       },
       [fetchAllcountries.pending]:(state)=>{
           state.isCountyLoading=true
       },
       [fetchAllcountries.rejected]:(state)=>{
           state.isCountyLoading=false
       }
    }
})

export const {selectedCountry}=countryApiSlice.actions
export default countryApiSlice.reducer