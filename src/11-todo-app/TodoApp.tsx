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
            <h1>Todo app</h1>

            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                                mi item
                            </span>
                            <button className="btn btn-danger">delete</button>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4>add Todo</h4>
                    <hr />
                    <form>
                        <input type="text" 
                            placeholder=""
                            className="form-control"
                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                        >
                            Add Todo
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export { TodoApp }