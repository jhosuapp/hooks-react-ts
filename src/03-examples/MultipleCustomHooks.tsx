import { useFetch } from "../hooks"

const MultipleCustomHooks = ():JSX.Element => {

    const { data, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/ditto');

    return (
        <>
            <h1>multiple custom hooks</h1>

            <hr />

            {isLoading && <p>Cargando...</p>}

            <pre>
                { JSON.stringify( data ) }
            </pre>

        </>
    )
}

export { MultipleCustomHooks }