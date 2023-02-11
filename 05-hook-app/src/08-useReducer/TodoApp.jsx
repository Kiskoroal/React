import { useEffect, useReducer } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';


export const TodoApp = () => {

    const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todosCount, pendingTodosCount} = useTodo();

    return(
        <>
            <h1>TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div classNameName="row">
                <div classNameName="col-7">
                    <TodoList todos = { todos }  onDeleteTodo = {handleDeleteTodo}
                    onToggleTodo = {handleToggleTodo}/>
                </div>
                <div classNameName="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo}/> 
                </div>
            </div>

        </>
    );
}