import { useReducer } from "react"
import { IinitialTodos } from './models/index';
import { todoReducer } from "./reducers/index";


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

    return (
        <section className="container mt-5">
            <h1>Esta es mi todo app</h1>
        </section>
    )
}

export { TodoApp }