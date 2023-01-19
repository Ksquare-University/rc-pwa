import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

interface User {
    uid: string
    email: string
    displayName: string
}

const initialState: User = {
    uid: "",
    email: "",
    displayName: "",
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLoginUser: (state, action) => {
        const {uid, email, displayName} = action.payload

        state.uid = uid
        state.email = email
        state.displayName = displayName
    },
    setLogoutUser: () => {
        return initialState
    }
  },
});

export const {setLoginUser, setLogoutUser} = userSlice.actions

export const selectUid = (state: RootState) => state.user.uid;
export const selectEmail= (state: RootState) => state.user.email;
export const selectName = (state: RootState) => state.user.displayName;

export default userSlice.reducer