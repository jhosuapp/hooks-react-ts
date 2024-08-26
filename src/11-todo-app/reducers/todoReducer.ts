import { IinitialTodos, IActionTodoReducer } from "../models/index";

const todoReducer = ( initialTodos:IinitialTodos, action: IActionTodoReducer) =>{

    switch(action.type){
        case '[TODO] Add todo':
            return [...initialTodos, action.payload];
        default: 
            return initialTodos;
    }

}

export { todoReducer }