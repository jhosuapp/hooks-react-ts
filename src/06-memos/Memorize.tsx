import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

const Memorize = ():JSX.Element => {

    const { counter, increment }  = useCounter(1);
    const [show, setShow] = useState<boolean>(false);

    const handleClick = ()=>{
        increment(1);
    }

    return (
        <section className="container mt-5">
            <h1>Counter: <Small  value={ counter } /> </h1>

            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleClick }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={
                    () => setShow(!show)
                }
            >
                show/hidde { JSON.stringify( show ) }
            </button>
        </section>
    )
}

export { Memorize }