import React,{useState,useEffect} from "react";

export default function useFetch(Api){
    const[loading,setLoading]=useState(true)
    const[data,setData]=useState();
    const[error,setError]=useState()

    useEffect(()=>{
        if(!Api) return;
        fetch(Api)
        .then(response=>response.json())
        .then(setData)
        .then(()=>setLoading(false))
        .catch(setError)
    },[Api])

    return({
        loading,
        data,
        error
    })
}