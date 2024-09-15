import { TodoListItem } from './index';
import { IinitialTodos, IinitialTodo } from '../models/index';

type IpropsTodoList = {
    state: IinitialTodos,
    handleTodoDelete: (Todo:IinitialTodo) => void,
    handleTodoToggle: (Todo:IinitialTodo) => void,
}

const TodoList = ({ state, handleTodoDelete, handleTodoToggle }:IpropsTodoList):JSX.Element => {

    return (
        <ul className="list-group">
            {
                state.map((todo, index)=> (
                    <TodoListItem 
                        key={ index } 
                        todo={ todo } 
                        handleTodoDelete={ handleTodoDelete } 
                        handleTodoToggle={ handleTodoToggle }
                    />
                ))
            }
        </ul>
    )
}

export { TodoList }