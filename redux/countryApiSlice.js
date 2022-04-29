import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url="https://restcountries.com/v2/all"

export const fetchAllcountries= createAsyncThunk("country/fetchAllcountries",
   async (_,thunkApi)=>{;
   const res=await axios(url)
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
    },extraReducers:{
        [fetchAllcountries.fulfilled]:(state,action)=>{
            // console.log(action);
            state.countries=action.payload
        }
    }
})

export const {selectedCountry}=countryApiSlice.actions
export default countryApiSlice.reducer