import { useCounter } from "../hooks";

const CounterWithHook = ():JSX.Element => {

    const { counter, increment, decrement, reset } = useCounter(10);

    return (
        <section className="container mt-5">
            <h1>Counter: { counter }</h1>

            <hr />

            <button className="btn btn-primary" onClick={ () => increment(2) }>+2</button>
            <button className="btn btn-primary" onClick={ reset }>reset</button>
            <button className="btn btn-primary" onClick={ () => decrement(2) }>-2</button>
        </section>
    )
}

export { CounterWithHook }