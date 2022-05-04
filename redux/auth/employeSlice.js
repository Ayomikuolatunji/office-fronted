import {createSlice} from "@reduxjs/toolkit"



const employeeAuth=createSlice({
    name:"employeeAuth",
    initialState:{
        credentials:null,
        isLoggedIn:false
    },
    reducers:{
        loginEmployee:(state,action)=>{
            state.credentials=action.payload
            state.isLoggedIn=true
        },
        logoutEmployee:(state)=>{
            state.credentials=null
            state.isLoggedIn=false
        }
    }
})

export const {loginEmployee,logoutEmployee}=employeeAuth.actions
export default employeeAuth.reducer
