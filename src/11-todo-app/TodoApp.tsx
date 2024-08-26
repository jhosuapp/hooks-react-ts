import { useReducer } from "react"
import { IinitialTodos, IinitialTodo, IActionTodoReducer } from './models/index';
import { todoReducer } from "./reducers/index";
import { TodoList, TodoAdd } from './components/index';


const TodoApp = ():JSX.Element => {

    const initialTodos:IinitialTodos = [
        {
            id: 1,
            title: 'Learn react',
            complete: false,
        },
        {
            id: 2,
            title: 'Learn framer motion',
            complete: false,
        },
    ]

    const [ state, dispatch ] = useReducer(todoReducer, initialTodos);

    const handleTodo = (Todo:IinitialTodo) =>{
        const action:IActionTodoReducer = {
            type: '[TODO] Add todo',
            payload: Todo
        }
        dispatch(action);
    }

    return (
        <section className="container mt-5">
            <h1>Todo app</h1>

            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList state={ state } />
                </div>
                <div className="col-5">
                    <h4>add Todo</h4>
                    <hr />
                    <TodoAdd handleTodo={ handleTodo } />
                </div>
            </div>
        </section>
    )
}

export { TodoApp }