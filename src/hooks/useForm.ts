import { useState } from 'react';
import type { ChangeEventHandler } from 'react';


type Iform = {
    username?: string,
    email?: string,
    password?: string,
}

type IUseForm = {
    HandleOnChange: ChangeEventHandler<HTMLInputElement>;
    HandleOnReset: () => void;
    form: Iform;
}

const useForm = ( initialForm: Iform ):IUseForm=>{
    const [form, setForm] = useState<Iform>( initialForm );
    //Save values form
    const HandleOnChange:ChangeEventHandler<HTMLInputElement> = ({ target })=>{
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }
    //Reset form
    const HandleOnReset = ()=>{
        setForm({
            ...initialForm
        });
    }
    //Return public methods
    return {
        HandleOnChange,
        form,
        HandleOnReset
    }
}

export { useForm }