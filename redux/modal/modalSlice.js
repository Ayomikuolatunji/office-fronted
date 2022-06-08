import { createSlice } from "@reduxjs/toolkit";


const modalSlice=createSlice({
    name:"modal",
    initialState:{
        isProfilePicture:false,
        isCompanyOpen:false
    },
    reducers:{
       setProfilePictureModal:(state)=>{
           state.isProfilePicture=true
       },
       openCompany:(state,action)=>{
        state.isCompanyOpen=action.payload
      },
      closeCompany:(state,action)=>{
        state.isCompanyOpen=action.payload
      }
    }
})
export const {setProfilePictureModal,openCompany,closeCompany}=modalSlice.actions

export default modalSlice.reducer