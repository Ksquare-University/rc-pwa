import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

interface Order {
    order: any
}

const initialState: Order = {
    order: null
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderDetails: (state, action) => {
        state.order = action.payload
    },
    resetOrder: (state) => {
        state.order = null
    },
  },
});

export const {orderDetails, resetOrder} = orderSlice.actions

export const selectOrder = (state: RootState) => state.order.order;

export default orderSlice.reducer