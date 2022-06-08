import { createSlice } from "@reduxjs/toolkit";


const modalSlice=createSlice({
    name:"modal",
    initialState:{
        isProfilePicture:false,
        isCompanyOpen:false,
        isProfileOpen:false,
    },
    reducers:{
       setProfilePictureModal:(state)=>{
           state.isProfilePicture=true
       },
       openProfileModal:(state,action)=>{
          state.isProfileOpen=action.payload           
       },
       closeProfileModal:(state,action)=>{
         state.isProfileOpen=action.payload
       },
       openCompany:(state,action)=>{
        state.isCompanyOpen=action.payload
      },
      closeCompany:(state,action)=>{
        state.isCompanyOpen=action.payload
      }
    }
})
export const {setProfilePictureModal,openCompany,closeCompany,openProfileModal,closeProfileModal}=modalSlice.actions

export default modalSlice.reducer