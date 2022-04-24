import { createSlice } from "@reduxjs/toolkit";



const AllUserSlice=createSlice({
    name:"users",
    initialState:{
        user: null,
        chat:null,
        message:null,
        WebSocket:null,
        modal:true
    },
    reducers:{
        currentUser:(state,action)=>{
             state.user= action.payload
        },
        updateChat:(state,action)=>{
           state.chat=action.payload
        },
        updateMessage:(state,action)=>{
            state.message=action.payload
        },
        updatesSocket:(state,action)=>{
            state.WebSocket=action.payload
        },
        updateProfileModal:(state,action)=>{
            state.modal=action.payload
        }
    }
})

export const {currentUser,updateChat,updateMessage,updatesSocket,updateProfileModal}=AllUserSlice.actions
export default AllUserSlice.reducer