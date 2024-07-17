import { useCounter } from "../hooks";

const CounterWithHook = ():JSX.Element => {

    const { counter, increment, decrement, reset } = useCounter(10);

    return (
        <>
            <h1>Counter: { counter }</h1>

            <hr />

            <button className="btn btn-primary" onClick={ () => increment(2) }>+2</button>
            <button className="btn btn-primary" onClick={ reset }>reset</button>
            <button className="btn btn-primary" onClick={ () => decrement(2) }>-2</button>
        </>
    )
}

export { CounterWithHook }