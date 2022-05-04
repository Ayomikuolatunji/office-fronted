import {createSlice} from "@reduxjs/toolkit"



const employeeSlice=createSlice({
    name:"employeeAuth",
    initialState:{
        credentials:"",
        isLoggedIn:false
    },
    reducers:{
        login:(state,action)=>{
            state.credentials=action.payload
            state.isLoggedIn=true
        },
        logout:(state,action)=>{
            state.isLoggedIn=false
        }
    }
})

export const {login,logout}=employeeSlice.actions
export default employeeSlice.reducer
