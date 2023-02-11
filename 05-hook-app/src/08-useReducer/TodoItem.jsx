
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

    return (
        <li classNameName='list-group-item d-flex justify-content-between'>
            <span classNameName={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToggleTodo(todo.id)}
            >
                {todo.description}
            </span>
            <button
                classNameName='btn btn-danger'
                onClick={() => onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}