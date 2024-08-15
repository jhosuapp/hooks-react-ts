type todo = {
    id: number,
    todo: string,
    done: boolean
};

type listTodos = todo[];

type actionTodo = {
    type: string,
    payload?: todo
}

const listTodos:listTodos = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];


const todoReducer = ( state = listTodos, action?:actionTodo ):listTodos => {

    if(action?.type === '[TODO] añadir Todo' && action.payload){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Otra todo',
    done: true
}

const addTodoAction = {
    type: '[TODO] añadir Todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);


console.log(todos);