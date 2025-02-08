import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : "todo",
    initialState : {
        todo : []
    },
    reducers : {
        addtodo : (state , action) => {
            state.todo.push({
                id : Date.now(),
                text : action.payload,
                complate : false
            })
        },

        deletetodo : (state, action) => {
            state.todo = state.todo.filter(todo => todo.id !== action.payload)
        },

        toggletodo : (state, action) => {
            const todo = state.todo.find(todo.id === action.payload)
            if(todo){
                todo.complate = !todo.complate
            }
        }
    }
})


export const {addtodo , deletetodo , toggletodo} = todoSlice.actions
export default todoSlice.reducer;