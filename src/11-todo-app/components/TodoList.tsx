import { TodoListItem } from './index';
import { IinitialTodos } from '../models/index';

type IpropsTodoList = {
    state: IinitialTodos
}

const TodoList = ({ state }:IpropsTodoList):JSX.Element => {

    return (
        <ul className="list-group">
            {
                state.map((todo, index)=> (
                    <TodoListItem key={ index } todo={ todo } />
                ))
            }
        </ul>
    )
}

export { TodoList }