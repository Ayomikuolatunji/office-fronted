// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// const url="https://restcountries.com/v2/all"

// export const fetchAllcountries= createAsyncThunk("country/fetchAllcountries",
//    async (country, thunkAPI)=>{
//     thunkAPI.dispatch( selectedCountry(country[0]))
//     try {
//         const res=await axios(url)
//         return res.data
//     } catch (error) {
//         return thunkAPI.rejectWithValue('something went wrong');
//     }
// })

// const initialState={
//     seletedCountry:"",
//     countries:[],
//     isCountyLoading:true
// }

// const countryApiSlice=createSlice({
//     name:"country",
//     initialState,
//     reducers:{
//        selectedCountry:(state,action)=>{
//            state.seletedCountry=action.payload
//        }
//     },extraReducers:{
//         [fetchAllcountries.fulfilled]:(state,action)=>{
//             state.countries=action.payload
//             state.isCountyLoading=false
//         },
//         [fetchAllcountries.rejected]:(state)=>{
//             state.isCountyLoading=false
//         },
//         [fetchAllcountries.pending]:(state)=>{
//             state.isCountyLoading=true
//         }
//     }
// })

// export const {selectedCountry}=countryApiSlice.actions
// export default countryApiSlice.reducer