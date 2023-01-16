import { createSlice } from '@reduxjs/toolkit'

interface User {
    user: string
    token: string
}

const initialState: User = {
    user: "",
    token: "",
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setLogInCredentials: (state, action) => {
        const {user, accessToken} = action.payload
        state.user = user
        state.token = accessToken
    },
    setLogOut: () => {
        return initialState
    }
  }
});

export const {setLogInCredentials, setLogOut} = authSlice.actions

export const selectUser = (state: { auth: { user: any; }; }) => state.auth.user;
export const selectToken = (state: { auth: { token: any; }; }) => state.auth.token;

export default authSlice.reducer