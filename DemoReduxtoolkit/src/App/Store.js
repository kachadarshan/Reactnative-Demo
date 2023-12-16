import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/CounterReducedr/CounterSlice'

export const store = configureStore({
    reducer: counterReducer
})