import { useEffect, useState } from 'react';
import type { ChangeEventHandler } from 'react';
import { Message } from './Message';

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
        setForm({
            ...form,
            [name]: value
        });
    }

    useEffect(()=>{
        // console.log('effect init');
    }, []);

    useEffect(()=>{
        // console.log('effect init or change form state');
    }, [form]);

    useEffect(()=>{
        // console.log('effect init or email form');
    }, [email]);

    return (
        <section className="container mt-5">
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

            {
                username == 'Jhosua2' && <Message />
            }
        </section>
    )
}

export { SimpleForm }