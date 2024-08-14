import { useCallback, useState } from 'react';
import { Child } from './Child';


const Parent = ():JSX.Element => {
    const [value, setValue] = useState<number>(0);
    const numbers = [2, 4, 6, 8, 10];

    const increment = useCallback((number:number)=>{
        setValue((value) => value + number);
    }, []);

    return (
        <section className="container mt-5">
            <h1>Value: { value } </h1>

            {
                numbers.map((value)=> (
                    <Child key={ value }  number={ value } increment={ increment } />
                ))
            }
            
        </section>
    )
}

export { Parent }