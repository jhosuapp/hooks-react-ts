import { IinitialTodo } from '../models/index';

type IpropsTodoListItem = {
    todo: IinitialTodo,
    handleTodoDelete: (Todo: IinitialTodo) => void
    handleTodoToggle: (Todo: IinitialTodo) => void
}

const TodoListItem = ({ todo, handleTodoDelete, handleTodoToggle }:IpropsTodoListItem ):JSX.Element => {

    const handleDelete = ()=>{
        handleTodoDelete(todo);
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center pt-2 mt-2">
            <span 
                onClick={ ()=> { handleTodoToggle(todo) } }
                className={`${todo.complete ? 'text-decoration-line-through' : ''}`}
            >
                { todo.title }
            </span>
            <button className="btn btn-danger" onClick={ handleDelete }>delete</button>
        </li>
    )
}

export { TodoListItem }