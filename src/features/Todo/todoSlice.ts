import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TodoProperties {
    id: string,
    title: string,
    isCompleted: boolean
}

interface TodoState {
    todos: TodoProperties[]
}

export interface AddTodo {
    title: string,
}
const initialState: TodoState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<AddTodo>) => {
            const newTodo: TodoProperties = {
                id: nanoid(2),
                isCompleted: false,
                ...action.payload
            }
            state.todos.push(newTodo)
        },
        completeTodo: (state, action: PayloadAction<string>) => {
           const todo = state.todos.find(T => T.id === action.payload)

           if(todo) {
               todo.isCompleted = !todo.isCompleted
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(T => T.id !== action.payload)
        },
        clearAll: state => {
            state.todos = []
        },
        completeAll: state => {
            state.todos = state.todos.map(todo => ({...todo, isCompleted: true}))
        }
    }
})

export const selectTodos = (state: RootState) => state.todo.todos

export const {addTodo, completeTodo, deleteTodo, clearAll, completeAll} = todoSlice.actions

export default todoSlice.reducer