import { TodoListItem } from './index';
import { IinitialTodos, IinitialTodo } from '../models/index';

type IpropsTodoList = {
    state: IinitialTodos,
    handleTodoDelete: (Todo:IinitialTodo) => void,
}

const TodoList = ({ state, handleTodoDelete }:IpropsTodoList):JSX.Element => {

    return (
        <ul className="list-group">
            {
                state.map((todo, index)=> (
                    <TodoListItem key={ index } todo={ todo } handleTodoDelete={ handleTodoDelete } />
                ))
            }
        </ul>
    )
}

export { TodoList }