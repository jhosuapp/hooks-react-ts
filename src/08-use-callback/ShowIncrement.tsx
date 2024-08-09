import React from 'react';

type Props = {
    increment: (value: number) => void;
}


const ShowIncrement = React.memo(({ increment }:Props):JSX.Element => {

    console.log('se dibuja')

    return (
        <button
            className="btn btn-primary"
            onClick={ ()=> increment(5) }
        >
            Increment
        </button>
    )
})

export { ShowIncrement }