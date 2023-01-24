import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../app/store'


interface Auth {
    user: string
    token: string
    // loading: 'idle' | 'pending' | 'success' | 'failed'
}

const initialState: Auth = {
    user: "",
    token: "",
    // loading: 'idle',
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
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchUserByUid.pending, (state) => {
  //       state.loading = 'pending'
  //   })
  //   builder.addCase(fetchUserByUid.fulfilled, (state, action) => {
  //     const {user, accessToken} = action.payload
  //       state.user = user
  //       state.token = accessToken
  //       state.loading = 'success';
  //   })
// },
});

export const {setLogInCredentials, setLogOut} = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer