import { createSlice } from "@reduxjs/toolkit";

interface IntitalStateProps {
    user?: null;
    isAuthenticated: string | boolean;
    token: string | null;
    refresh: string | null;
    csrftoken: null;
    role?: string | null;
}

const initialState: IntitalStateProps = {
    isAuthenticated: localStorage.getItem('isAuthenticated') || false,
    token: localStorage.getItem('token') || null,
    refresh: localStorage.getItem('refresh') || null,
    csrftoken: null,
    role: localStorage.getItem('role') || null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            const {access, refresh, role } = action.payload
            state.token = access;
            state.refresh = refresh;
            state.isAuthenticated = true;
            localStorage.setItem("token", access)
            localStorage.setItem("refresh", refresh)
            localStorage.setItem("isAuthenticated", JSON.stringify(true))      
        },
        clearAuthData: (state, action) => {
            state.isAuthenticated = false
            state.token = null
            state.refresh = null
            localStorage.removeItem("token")
            localStorage.removeItem("refresh")
            //localStorage.removeItem("isAuthenticated", JSON.stringify(false))
        }
       
        
    },
    // extraReducers: (builder) => {
    //     builder
      
    // }
})

export const { setAuthData, clearAuthData } = authSlice.actions

export default authSlice.reducer