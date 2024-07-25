import { useRef } from "react";

const FocusScreen = ():JSX.Element => {

    const nodeInput = useRef<HTMLInputElement>(null);

    const handleClick = ()=>{
        nodeInput.current && nodeInput.current.select();
    }

    return (
        <section className="container mt-5">
            <h1>Focus screen</h1>

            <hr />

            <input 
                ref={ nodeInput }
                type="text" 
                className="form-control"
                placeholder="Ingrese su nombre"
            />


            <button 
                className="btn btn-primary mt-3"
                onClick={ handleClick }
            >Set focus</button>

        </section>
    )
}

export { FocusScreen }