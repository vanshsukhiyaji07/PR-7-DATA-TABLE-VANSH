import { createSlice } from "@reduxjs/toolkit";


const authslice = createSlice({
    name : "auth",
    initialState:{
        user: null,
        isAuthenticated : false,
        error: null,
    },
    reducers : {
        login : (state , action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        },
        loginfal : (state , action) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        signup : (state , action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        },

        signupfal : (state , action) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        logout : (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        }
    }
});

export const {login , loginfal , signup , signupfal , logout} = authslice.actions;
export default authslice.reducer;