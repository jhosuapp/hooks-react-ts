import { IinitialTodos, IActionTodoReducer } from "../models/index";

const todoReducer = ( initialTodos:IinitialTodos, action: IActionTodoReducer) =>{

    switch(action.type){
        case '[TODO] Add todo':
            return [...initialTodos, action.payload];
        case '[TODO] Delete todo': 
            const todos = [...initialTodos];
            const { id } = action.payload;
            //Find index && remove todo
            const findIndexTodo = todos.findIndex(todo => todo.id === id);
            todos.splice(findIndexTodo, 1); 
            return todos;
        default: 
            return initialTodos;
    }

}

export { todoReducer }