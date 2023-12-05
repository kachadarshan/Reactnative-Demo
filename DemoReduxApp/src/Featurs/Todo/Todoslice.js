import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[]

}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(action.payload)
        }
    }

})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer

