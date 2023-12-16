import { createSlice } from '@reduxjs/toolkit'


const initialState = { value: 0 }

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value++
        },
        decrement: (state, action) => {
            state.value--
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer   //this need to import in store 