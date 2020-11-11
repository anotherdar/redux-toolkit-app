import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectTodos, deleteTodo, completeTodo} from './todoSlice'

import './Todo.css'
import { TodoItem } from '../../components/TodoItem'
import { TodoForm } from './TodoForm'
import { TodoList } from '../../components/Todolist'

export const Todo: React.FC = () => {
    const todoState = useSelector(selectTodos);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <TodoForm />
            <TodoList>
                {
                    todoState.map(T => {
                        return (
                            <TodoItem 
                                {...T}
                                key={T.id}
                                deleteTodo={() =>dispatch(deleteTodo(T.id))}
                                completeTodo={() => dispatch(completeTodo(T.id))}
                            />
                        )
                    })
                }
            </TodoList>
        </React.Fragment>
    )
}