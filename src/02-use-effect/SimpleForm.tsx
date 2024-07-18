import { useState } from 'react';
import type { ChangeEventHandler } from 'react';

type form = {
    username: string,
    email: string
}


const SimpleForm = ():JSX.Element => {

    const [form, setForm] = useState<form>({
        username: 'Jhosua',
        email: 'jhosuapvll@gmail.com'
    });

    const { username, email } = form;

    const HandleOnChange:ChangeEventHandler<HTMLInputElement> = ({ target })=>{
        const { name, value } = target;
        console.log(name, value);
        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="username"
                name="username"
                value={ username }
                onChange={ HandleOnChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={ email }
                onChange={ HandleOnChange }
            />
        </>
    )
}

export { SimpleForm }