import { useEffect } from "react"

const Message = ():JSX.Element => {


    useEffect(()=>{

        console.log('message Mounted');

        return () => {
            console.log('Message Unmounted');
        }
    }, []);

    return (
        <>  
            <h3 className="mt-3">Usuario ya existe</h3>
        </>
    )
}

export { Message }