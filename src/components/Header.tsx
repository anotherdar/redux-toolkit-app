import * as React from 'react'

import {useDispatch} from 'react-redux'
import {clearAll, completeAll} from '../features/Todo/todoSlice'

export const Header: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <header className="Todo-header">
            <nav className="Todo-header__navigation">
                <h1 className="Todo-header__navigation--link">Add it</h1>


                <div className="Todo-header__actions">
                    <button className="btn delete" onClick={() => dispatch(completeAll())}>complete all</button>
                    <button className="btn complete" onClick={() => dispatch(clearAll())}>clear all</button>
                </div>
            </nav>
        </header>
    )
}