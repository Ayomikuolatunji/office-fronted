import { createSlice } from "@reduxjs/toolkit";


const modalSlice=createSlice({
    name:"modal",
    initialState:{
        isProfilePicture:false,
        isCompanyOpen:100
    },
    reducers:{
       setProfilePictureModal:(state,)=>{
           state.isProfilePicture=true
       },
       openCompany:(state)=>{
        state.isCompanyOpen=0
      },
      closeCompany:(state)=>{
        state.isCompanyOpen=100
      }
    }
})
export const {setProfilePictureModal,openCompany,closeCompany}=modalSlice.actions
export default modalSlice.reducer