import { createSlice } from "@reduxjs/toolkit";



const AllUserSlice=createSlice({
    name:"users",
    initialState:{
        users: null,
        chat:undefined
    },
    reducers:{
        allUsersData:(state,action)=>{
             state.users = action.payload
        },
        updateChat:(state,action)=>{
           state.chat=action.payload
        }
    }
})

export const {allUsersData,updateChat}=AllUserSlice.actions
export default AllUserSlice.reducer