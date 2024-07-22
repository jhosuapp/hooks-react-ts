import { useState } from "react";

export interface TypesCounter {
    counter1: number,
    counter2: number,
    counter3: number,
}

const Counter = ():JSX.Element => {

    const [counter, setCounter] = useState<TypesCounter>({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = counter;

    const handleClick = ():void => {
        setCounter({
            ...counter,
            counter1: counter1 + 1,
        });
    }


    return (
        <section className="container mt-5">
            <h1>Counter: { counter1 }</h1>
            <h1>Counter: { counter2 }</h1>
            <h1>Counter: { counter3 }</h1>

            <hr />

            <button className="btn" onClick={ handleClick }>+1</button>
        </section>
    )
}

export { Counter }