import * as React from 'react'

import {TodoProperties} from '../features/Todo/todoSlice'

interface TodoItemProps extends TodoProperties {
    completeTodo(): void,
    deleteTodo(): void
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
    const {title, isCompleted, deleteTodo, completeTodo} = props

    return (
        <li className="Todo-item">
            <label className="Todo-item--box">
                <input className="Todo-item--input" type="checkbox" checked={isCompleted} onChange={() => completeTodo()}/>
                <h1 className="Todo-item__title" style={{textDecoration: `${isCompleted ? "line-through" : "none"}`}}>{title}</h1>
            </label>
            <button className="Todo-item__action" onClick={() => deleteTodo()}>X</button>
        </li>
    )
}