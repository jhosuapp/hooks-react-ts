import { useFetch } from "../hooks";

interface Pokemon {
    name: string
}

const MultipleCustomHooks = ():JSX.Element => {

    const { data, isLoading } = useFetch<Pokemon>('https://pokeapi.co/api/v2/pokemon/ditto');

    return (
        <>
            <h1>multiple custom hooks</h1>

            <hr />

            {isLoading && <p>Cargando...</p>}

            <pre>
                { JSON.stringify( data?.name ) }
            </pre>

        </>
    )
}

export { MultipleCustomHooks }