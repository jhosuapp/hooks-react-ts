import { TodoList, TodoAdd } from './components/index';
import { useTodo } from '../hooks';


const TodoApp = ():JSX.Element => {

    const { state, handleTodoDelete, handleTodoToggle, handleTodo } = useTodo();

    return (
        <section className="container mt-5">
            <h1>Todo app</h1>

            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        state={ state } 
                        handleTodoDelete={ handleTodoDelete } 
                        handleTodoToggle={ handleTodoToggle }
                    />
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