import { useCounter } from "../hooks";
import { useMemo, useState } from "react";

const heavyStuff = (iterations: number)=>{
    for(let i = 0; i < iterations; i++){
        console.log(iterations);
    }

    return `${ iterations } iteraciones realizadas`;
}

const MemoHook = ():JSX.Element => {

    const { counter, increment }  = useCounter(2);
    const [show, setShow] = useState<boolean>(false);

    const handleClick = ()=>{
        increment(1);
    }

    const memorizeValue = useMemo(() => heavyStuff( counter ), [counter] );

    return (
        <section className="container mt-5">
            <h1>Counter: <small>{ counter }</small> </h1>

            <hr />

            <p> { memorizeValue } </p>

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

export { MemoHook }