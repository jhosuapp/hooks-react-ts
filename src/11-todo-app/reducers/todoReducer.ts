import { IinitialTodos, IActionTodoReducer } from "../models/index";

const todoReducer = ( initialTodos:IinitialTodos, action: IActionTodoReducer) =>{

    switch(action.type){
        case 'abc':
            throw new Error('error');
        default: 
            return initialTodos;
    }

}

export { todoReducer }