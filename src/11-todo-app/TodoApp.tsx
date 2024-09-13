import { useEffect, useReducer } from "react"
import { IinitialTodos, IinitialTodo, IActionTodoReducer } from './models/index';
import { todoReducer } from "./reducers/index";
import { TodoList, TodoAdd } from './components/index';


const init = ()=> {
    const storedTodo = localStorage.getItem('Todo');
    return storedTodo ? JSON.parse(storedTodo) : [];
}

const TodoApp = ():JSX.Element => {

    const initialTodos:IinitialTodos = [];

    const [ state, dispatch ] = useReducer(todoReducer, initialTodos, init);
    //Save in local storage
    useEffect(()=>{
        localStorage.setItem('Todo', JSON.stringify(state));
    }, [ state ]);
    //update state
    const handleTodo = (Todo:IinitialTodo) =>{
        const action:IActionTodoReducer = {
            type: '[TODO] Add todo',
            payload: Todo
        }
        dispatch(action);
    }
    //Delete todo
    const handleTodoDelete = (Todo:IinitialTodo) =>{
        const action:IActionTodoReducer = {
            type: '[TODO] Delete todo',
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
                    <TodoList state={ state } handleTodoDelete={ handleTodoDelete } />
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