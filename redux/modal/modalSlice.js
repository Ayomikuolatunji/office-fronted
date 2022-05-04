import { createSlice } from "@reduxjs/toolkit";


const modalSlice=createSlice({
    name:"modal",
    initialState:{
        isProfilePicture:false,
    },
    reducers:{
       setProfilePictureModal:(state,)=>{
           state.isProfilePicture=true
       }
    }
})
export const {setProfilePictureModal}=modalSlice.actions
export default modalSlice.reducer