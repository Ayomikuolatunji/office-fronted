import {createSlice} from "@reduxjs/toolkit"



const employeeSlice=createSlice({
    name:"employeeAuth",
    initialState:{
        credentials:"",
        isLoggedIn:false
    },
    reducers:{
        loginEmployee:(state,action)=>{
            state.credentials=action.payload
            state.isLoggedIn=true
        },
        logoutEmployee:(state)=>{
            state.isLoggedIn=false
        }
    }
})

export const {loginEmployee,logoutEmployee}=employeeSlice.actions
export default employeeSlice.reducer
