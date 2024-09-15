export type IinitialTodo = {
    id: string,
    title: string,
    complete: boolean,
}

export type IinitialTodos = IinitialTodo[];

export type IActionTodoReducer = {
    payload: IinitialTodo,
    type: '[TODO] Add todo' | '[TODO] Delete todo' | '[TODO] Toggle todo'
}