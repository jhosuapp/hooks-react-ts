import { IinitialTodo } from '../models/index';

type IpropsTodoListItem = {
    todo: IinitialTodo
}

const TodoListItem = ({ todo }:IpropsTodoListItem ):JSX.Element => {
    console.log(todo);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center pt-2 mt-2">
            <span>
                { todo.title }
            </span>
            <button className="btn btn-danger">delete</button>
        </li>
    )
}

export { TodoListItem }