export type IinitialTodo = {
    id: number,
    title: string,
    complete: boolean,
}

export type IinitialTodos = IinitialTodo[];

export type IActionTodoReducer = {
    payload: IinitialTodo,
    type: '[TODO] Add todo'
}