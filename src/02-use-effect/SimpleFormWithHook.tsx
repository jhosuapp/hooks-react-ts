// import { useEffect, useState } from 'react';
// import type { ChangeEventHandler } from 'react';
import { Message } from './Message';
import { useForm } from '../hooks';

const SimpleFormWithHook = ():JSX.Element => {

    const { form, HandleOnChange } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = form;

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

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={ password }
                onChange={ HandleOnChange }
            />

            {
                username == 'Jhosua2' && <Message />
            }
        </>
    )
}

export { SimpleFormWithHook }