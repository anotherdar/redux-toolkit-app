import {combineReducers} from '@reduxjs/toolkit'

import todoReducer from './Todo/todoSlice'

export default combineReducers({
    todo: todoReducer,
})