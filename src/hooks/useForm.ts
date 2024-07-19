import { useState } from 'react';
import type { ChangeEventHandler } from 'react';


type Iform = {
    username?: string,
    email?: string,
    password?: string,
}

type IUseForm = {
    HandleOnChange: ChangeEventHandler<HTMLInputElement>;
    form: Iform
}

const useForm = ( initialForm: Iform ):IUseForm=>{
    const [form, setForm] = useState<Iform>( initialForm );

    const HandleOnChange:ChangeEventHandler<HTMLInputElement> = ({ target })=>{
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }


    return {
        HandleOnChange,
        form,
    }
}

export { useForm }