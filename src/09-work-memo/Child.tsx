import React from 'react';

type Props = {
    number: number;
    increment: (number: number) => void
}

const Child = React.memo(( {number, increment}:Props ):JSX.Element => {

    console.log('me he vuelto a renderizar')

    return (
        <button
            className="btn btn-primary"
            onClick={ ()=>  increment(number) }
        >
            { number }
        </button>
    )
})

export { Child }