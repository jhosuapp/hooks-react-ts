import { useEffect, useState } from "react";

const getPokemons = async (url: string) =>{
    const request = await fetch(url);
    const response = await request.json();
    return response;
}


const useFetch = (url: string)=>{
    const [responseData, setResponseData] = useState<{}>({});

    useEffect(()=>{
        try{
            getPokemons(url)
                .then((data)=>{
                    setResponseData(data);
                }).catch((error)=>{
                    console.log(error + 'promise');
                });
        }catch(error){
            console.log(error + 'try');
        }
    },[]);

    return {
        responseData
    }

}

export { useFetch }