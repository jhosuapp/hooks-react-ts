import { useEffect, useReducer } from "react"
import { IinitialTodos, IinitialTodo, IActionTodoReducer } from '../11-todo-app/models/index';
import { todoReducer } from "../11-todo-app/reducers/index";


const init = ()=> {
    const storedTodo = localStorage.getItem('Todo');
    return storedTodo ? JSON.parse(storedTodo) : [];
}

const useTodo = () => {

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
    //Check and uncheck todo
    const handleTodoToggle = (Todo:IinitialTodo) =>{
        const action:IActionTodoReducer = {
            type: '[TODO] Toggle todo',
            payload: Todo  
        }
        dispatch(action);
    }


    return {
        handleTodo,
        handleTodoDelete,
        handleTodoToggle,
        state
    }
}

export { useTodo }