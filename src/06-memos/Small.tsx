import React from 'react';

type Props = {
    value: number;
}

const Small = React.memo(({ value }: Props):JSX.Element => {

    console.log('me volví a renderizar :(');

    return (
        <>
            <small>{ value }</small>
        </>
    )
})

export { Small }