import { createSlicem,createAsyncThunk } from "@reduxjs/toolkit";



export const fetchAllcountries=createAsyncThunk("country/country")

const countryApiSlice=createSlice({
    name:"country",
    initialState:{
        countries:[],
        seletedCountry:""
    }
})

export default countryApiSlice.reducer