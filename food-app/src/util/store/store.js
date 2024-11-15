import { configureStore } from '@reduxjs/toolkit'
import { cartStore } from './cartstore'

const store= configureStore({
  reducer: {
    cart : cartStore
  },
})

export default store;
