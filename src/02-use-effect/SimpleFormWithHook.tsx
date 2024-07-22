import { useForm } from '../hooks';

const SimpleFormWithHook = ():JSX.Element => {

    const { form, HandleOnChange, HandleOnReset } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = form;

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

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={ password }
                onChange={ HandleOnChange }
            />

            <button onClick={ HandleOnReset }  className='btn btn-primary mt-2'>Reset</button>

        </section>
    )
}

export { SimpleFormWithHook }