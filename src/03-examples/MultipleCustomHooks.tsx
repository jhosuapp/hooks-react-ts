import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

interface Pokemon {
    name: string,
    id: string
    sprites: {
        front_default: string,
        front_shiny: string,
        back_default: string,
        back_shiny: string
    }
}

const MultipleCustomHooks = ():JSX.Element => {

    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading } = useFetch<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ counter }`);



    return (
        <section className="container mt-5">
            <h1>multiple custom hooks</h1>

            <hr />

            {isLoading && <LoadingMessage />}

            {!isLoading && (
                    <PokemonCard 
                        id={ data?.id } 
                        name={ data?.name }  
                        sprites={ [
                            data?.sprites.front_default || '',
                            data?.sprites.front_shiny || '',
                            data?.sprites.back_default || '',
                            data?.sprites.back_shiny || ''
                         ] }
                    />
                )
            }

            <article className="mt-2">
                <button
                    className="btn btn-primary mt-2"
                    onClick={ () => { decrement(1) } }
                    disabled={ isLoading || counter == 1 ? true : false }
                    >
                    Anterior
                </button>
                <button
                    className="btn btn-primary mt-2 mx-3"
                    onClick={ () => { increment(1) } }
                    disabled={ isLoading ? true : false }
                >
                    Siguiente
                </button>
            </article>

        </section>
    )
}

export { MultipleCustomHooks }