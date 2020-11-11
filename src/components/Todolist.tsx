import * as React from 'react'

export const TodoList: React.FC = ({children}) => {
    return (
        <ol className="Todo-list__container">
            {children}
        </ol>
    )
}