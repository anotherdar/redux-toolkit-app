import { RootState } from '../../app/store'
import Reducers from '../index'

let state: RootState;

test('it should create a new todo', () => {
    state = Reducers({
        todo: {
            todos: []
        }
    },
        {
            type: 'todo/addTodo', 
            payload: {
                isCompleted: false,
                title: 'run'
            }
        }
    )

    expect(state.todo.todos.length).toBe(1)

})

test('it should complete a todo', () => {
    state = Reducers({
        todo: {
            todos: [
                {id: 'one', title: "run",isCompleted: false}
            ]
        }
    }, {type: 'todo/completeTodo', payload: 'one'})

    expect(state).toEqual({todo: 
        {todos: [
            {id: 'one', title: "run",isCompleted: true}
        ]
    }})
})

test('it should delete a todo', () => {
    state = Reducers(
        {
            todo:{
                todos:[
                    {
                        id:'7u',
                        isCompleted:false,
                        title:'go to buy coffe'
                    }
                ]
            }
        }, {type:'todo/deleteTodo',payload:'7u'});
    
    expect(state).toEqual({todo:{todos:[]}});
})

test('it should complete all the todo', () => {
    state = Reducers(
        {
            todo:{
                todos:[
                    {id:'-H',isCompleted:false,title:'me'},
                    {id:'tz',isCompleted:false,title:'too'}
                ]
            }
        }, {type:'todo/completeAll'}
    );

    expect(state).toEqual(
        {
            todo:{
                todos:[
                    {id:'-H',isCompleted:true,title:'me'},
                    {id:'tz',isCompleted:true,title:'too'}
                ]
            }
        }
    );
})

test('it should delete all the todo', () => {
    state = Reducers(
        {
            todo:{
                todos:[
                    {id:'-H',isCompleted:false,title:'me'},
                    {id:'tz',isCompleted:false,title:'too'}
                ]
            }
        }, {type:'todo/clearAll'}
    );

    expect(state.todo.todos.length).toEqual(0)
})