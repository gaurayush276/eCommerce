import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "./authApi";
export const createUserAsync = createAsyncThunk('user/createUser' , 
    async (userData)=>{
        const response = createUser( userData ) ; 
        // console.log(userData)
        // console.log(response)
        return response.data  ; 
    }
) 

const userSlice = createSlice( {
    name : 'user' ,
    initialState : {
        loggedInUser : null , 
        status: 'idle' ,
    },


    extraReducers : (builder)=>{
        builder
        .addCase( createUserAsync.pending , (state)=>{
            state.status = 'pending' ;
        } )
        .addCase( createUserAsync.fulfilled , (state , action)=>{
            state.status = 'fulfilled' ;
            state.loggedInUser = action.payload ; 
        } )
    }
})
// using  state.auth.loggedInUser beacause we have set the auth : authreducer  in store.js 
export const selectLoggedInUser = (state)=> state.auth.loggedInUser ; 

export default userSlice.reducer ; 