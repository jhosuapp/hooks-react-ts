import { useRef, useState } from "react";

const TodoAdd = ():JSX.Element => {

    const nodeInput = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<boolean>(false);

    const handleAddTodo:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if(nodeInput?.current){
            const value = nodeInput.current.value;
            if(value.length > 0){
                setError(false);
                console.log({
                    id: 3,
                    title: value,
                    complete: false,
                });
            }else{
                setError(true);
            }
        }
    }

    return (
        <form onSubmit={ handleAddTodo }>
            <input type="text" 
                placeholder=""
                className="form-control"
                ref={ nodeInput }
            />
            {error && <p className="text-danger red">El campo no puede estar vacío</p>}
            <button 
                type="submit"
                className="btn btn-outline-primary mt-3"
            >
                Add Todo
            </button>
        </form>
    )
}

export { TodoAdd }