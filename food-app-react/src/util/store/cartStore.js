import { createSlice } from '@reduxjs/toolkit'

 export const cartStore = createSlice({
  name: 'cart',
  initialState: {
    items: ["1", "2", "3", "4"],
  },
  reducers: {
    addItem: (state,action) => {
      state.items.push(action.payload)
    },
    removeItem: (state,action) => {
      state.items.pop()
    },
    clearCart: (state, action) => {
      state.items.length = 0
    },
  },
})

export const { addItem, removeItem, clearCart } = cartStore.actions

export default cartStore.reducer
