import { useEffect, useState } from "react"

type Coords = {
    x: number,
    y: number
}


const Message = ():JSX.Element => {

    const [coords, setCoords] = useState<Coords>({
        x: 0,   
        y: 0
    });

    useEffect(()=>{

        const handleMousemove = (e:MouseEvent)=>{
            const { x, y } = e;
            setCoords({x, y});
        }

        window.addEventListener('mousemove', handleMousemove);
        
        return () => {
            window.removeEventListener('mousemove', handleMousemove);
        }
    }, []);

    return (
        <>  
            <h3 className="mt-3">Usuario ya existe</h3>
            { JSON.stringify(coords) }
        </>
    )
}

export { Message }