
interface IPokemon {
    id?: string,
    name?: string,
    sprites?: string[]
}

const PokemonCard = ({ name, id, sprites}:IPokemon):JSX.Element => {

    return (
        <section 
            style={{height: 200}}
        >
            <h2 className="text-capitalize">{ id } - { name }</h2>
            {/* Images */}
            <div>
                {
                    sprites?.map((sprite)=> (
                        <img key={ sprite }  src={ sprite } alt={ name } />
                    ))
                }
            </div>  
        </section>
    )
}

export { PokemonCard }