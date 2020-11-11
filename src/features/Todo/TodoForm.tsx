import * as React from 'react'
import { useDispatch } from 'react-redux';

import { AddTodo, addTodo } from './todoSlice';

export const TodoForm: React.FC = () => {
    const [todo, setAddTodo] = React.useState<AddTodo>({
        title: ''
    });

    const dispatch = useDispatch();

    const userInput = (key: 'title') => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            const event = e.target;

            setAddTodo(prevState => ({...prevState, [key]: event.value}))
        }
    }

    const clearInputs = () => {
        setAddTodo({
            title: ''
        })
    }

    const handlePressEnter = () => {
        return (e: React.KeyboardEvent<HTMLInputElement>) => {
            const event = e;
            if(event.key === "Enter" || event.key === 'enter') {
                
                if(todo.title === "") return alert('add a valid data')

                dispatch(addTodo(todo))
                clearInputs()
            }   
        }
    }

    return (
        <input 
            type="text" 
            value={todo.title} 
            onChange={userInput('title')} 
            className="Todo-input"
            placeholder="What's needs to be done?"
            onKeyPress={handlePressEnter()}
        />
    )
}