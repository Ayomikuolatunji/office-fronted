import { createSlice } from "@reduxjs/toolkit";



const AllUserSlice=createSlice({
    name:"users",
    initialState:{
        users: null
    },
    reducers:{
        allUsersData:(state,action)=>{
             state.users = action.payload
        }
    }
})

export const {allUsersData}=AllUserSlice.actions
export default AllUserSlice.reducer