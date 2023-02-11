import { todoReducer } from "../08-useReducer/todoReducer";
import { useReducer, useEffect } from 'react';

export const useTodo = () => {

    const initialState = []

    const init = () => {
        return JSON.parse( localStorage.getItem('todos' ) ) || [];
    }

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'add',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        console.log(id)
        dispatch({
            type: 'remove',
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        console.log(id)
        dispatch({
            type: 'done',
            payload: id,
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        todosCount: todos.length,
    }
}