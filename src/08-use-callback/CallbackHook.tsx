import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

const CallbackHook = ():JSX.Element => {

    const [counter, setCounter] = useState<number>( 10 );

    const handleIncrement = useCallback((value:number)=> {
        setCounter((c)=> c + value);
    }, []);

    // const handleIncrement = ()=>{
    //     setCounter(counter + 1);
    // }

    return (
        <section className="container">
            <h1>useCallback hook: { counter } </h1>
            <hr />
            <ShowIncrement increment={ handleIncrement } />
        </section>
    )
}

export { CallbackHook }