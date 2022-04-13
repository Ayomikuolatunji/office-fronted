import { createSlice } from "@reduxjs/toolkit";



const AllUserSlice=createSlice({
    name:"users",
    initialState:{
        users: null,
        chat:null,
        message:null
    },
    reducers:{
        allUsersData:(state,action)=>{
             state.users = action.payload
        },
        updateChat:(state,action)=>{
           state.chat=action.payload
        },
        updateMessage:(state,action)=>{
            state.message=action.payload
        }
    }
})

export const {allUsersData,updateChat,updateMessage}=AllUserSlice.actions
export default AllUserSlice.reducer