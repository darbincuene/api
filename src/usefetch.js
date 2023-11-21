import { useState, useEffect } from "react";

export function useFetch(url){


const[data, setData]=useState(null);
const [loading, setLoading] = useState(true);
const[error, setError]=useState(null);
  
  useEffect(()=> {
    const AbortController=new AbortController();
    setLoading(true,{signal:AbortController})
  fetch(url)
  .then((response) => response.json())
  .then((data)=> setError("ocurrio un error"))
  .catch ((error)=> setError(error))
  .finally( () => setLoading(false));
  },[]);
  return {data, loading, error}
}