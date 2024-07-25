import { useLayoutEffect, useRef, useState } from "react"

interface IPokemon {
    id?: string,
    name?: string,
    sprites?: string[]
}

interface IPosition {
    width: number,
    height: number
}

const PokemonCard = ({ name, id, sprites}:IPokemon):JSX.Element => {

    const nodeSection = useRef<HTMLElement>(null);

    const [position, setPosition] = useState<IPosition>({
        width: 0,
        height: 0
    });

    useLayoutEffect(()=>{
        if(nodeSection.current){
            const { width, height } = nodeSection.current?.getBoundingClientRect();
            setPosition({
                width,
                height
            });
        }
    },[]);

    return (
        <section 
            ref={ nodeSection }
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
            <code>
                { JSON.stringify( position ) }
            </code>
        </section>
    )
}

export { PokemonCard }