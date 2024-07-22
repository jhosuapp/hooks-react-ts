import { useEffect, useState } from "react";

type useFetchError = {
    code: number,
    message: string
}

type useFetchState = {
    data: {} | null,
    hasError: boolean,
    isLoading: boolean,
    error: useFetchError
}

const useFetch = (url: string): useFetchState =>{
    const [responseData, setResponseData] = useState<useFetchState>({
        data: {},
        hasError: false,
        isLoading: true,
        error: {} as useFetchError,
    });
    //Request when url change
    useEffect(()=>{
        getPokemons();
    },[url]);
    //Set loading
    const setLoading = () =>{
        setResponseData({
            data: {},
            hasError:false,
            isLoading: true,
            error: {} as useFetchError
        })
    }
    //Async request
    const getPokemons = async () =>{

        setLoading();

        const resp = await fetch(url);
        //Sleep
        await new Promise(resolve => setTimeout(resolve, 1500));
        //Validate if request it's ok
        if( !resp.ok ){
            setResponseData({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }
        //Set data
        const data = await resp.json();
        setResponseData({
            data: data,
            hasError: false,
            isLoading: false,
            error: {} as useFetchError,
        });
    }    

    return {
        data: responseData.data,
        hasError: responseData.hasError,
        isLoading: responseData.isLoading,
        error: responseData.error
    }
}

export { useFetch }