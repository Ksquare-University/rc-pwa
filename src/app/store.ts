import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'
import orderReducer from '../features/orderSlice'

export const store = configureStore({
  reducer: {
    order: orderReducer,
    auth: authReducer,
    user: userReducer,
  },

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
