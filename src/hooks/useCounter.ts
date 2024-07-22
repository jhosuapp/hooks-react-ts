import { useState } from "react"

type TypesCounter = {
    counter: number
    increment: (value: number) => void,
    decrement: (value: number) => void, 
    reset: () => void
}

const useCounter = (initialValue:number):TypesCounter=>{
    const [counter, setCounter] = useState<number>(initialValue);


    const increment = (value: number)=>{
        setCounter(counter + value);
    }

    const decrement = (value: number)=>{
        setCounter(counter - value);
    }
    const reset = ()=>{
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement, 
        reset
    }
}

export { useCounter }