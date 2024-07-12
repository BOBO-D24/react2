import { configureStore } from '@reduxjs/toolkit'
import createReducer from './cart'

export const store = configureStore({
    reducer: {
        cart: createReducer,
        // user: .....
    }
})