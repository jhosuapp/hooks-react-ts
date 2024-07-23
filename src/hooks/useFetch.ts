import { useEffect, useRef, useState } from "react";

type useFetchError = {
    code: number,
    message: string
}

type useFetchState<T> = {
    data: T | null,
    hasError: boolean,
    isLoading: boolean,
    error: useFetchError
}

const localCache: { [key: string]: { [key: string]: string | number | string[] | number[] | {} } } = {};

const useFetch = <T>(url: string): useFetchState<T> =>{
    const [responseData, setResponseData] = useState<useFetchState<T>>({
        data: null,
        hasError: false,
        isLoading: true,
        error: {} as useFetchError,
    });
    console.log(localCache);
    //Mount 
    const isMounted = useRef(true);
    //Request when url change
    useEffect(()=>{
        isMounted.current = true;
        getPokemons();
        return () => {
            isMounted.current = false;
        }
    },[url]);
    //Set loading
    const setLoading = () =>{
        setResponseData({
            data: null,
            hasError:false,
            isLoading: true,
            error: {} as useFetchError
        })
    }
    //Async request
    const getPokemons = async () =>{
        //Verify cache
        if( localCache[url] ){
            setResponseData({
                data: localCache[url] as T,
                hasError:false,
                isLoading: false,
                error: {} as useFetchError
            });
            return;
        }
        //Loading
        setLoading();
        //Get data
        const resp = await fetch(url);
        //Sleep
        await new Promise(resolve => setTimeout(resolve, 1500));
        //Validate if request it's ok
        if( !resp.ok ){
            isMounted.current && setResponseData({
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
        isMounted.current && setResponseData({
            data: data,
            hasError: false,
            isLoading: false,
            error: {} as useFetchError,
        });
        //Save cache
        localCache[url] = data;
    }    

    return {
        data: responseData.data,
        hasError: responseData.hasError,
        isLoading: responseData.isLoading,
        error: responseData.error
    }
}

export { useFetch }